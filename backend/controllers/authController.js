const db = require("../config/db");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");

// Register
const registerUser = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  if (!fullname || !username || !email || !password) {
    return res.status(400).json({ message: "semua field harus diisi" });
  }

  try {
    const emailCheck = "SELECT * FROM users WHERE email = ?";
    db.query(emailCheck, [email], async (err, results) => {
      if (err) return res.status(500).json({ message: "Query gagal" });

      if (results.length > 0) {
        return res.status(409).json({ message: "Email sudah digunakan" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = uuidv4();

      const sql = `
        INSERT INTO users (fullname, username, email, password, verification_token, is_verified)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      db.query(
        sql,
        [fullname, username, email, hashedPassword, verificationToken, false],
        async (err, results) => {
          if (err) return res.status(500).json({ message: "Registrasi gagal" });

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.PASSWORD_USER,
            },
          });

          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Verifikasi Email EduCourse",
            html: `
              <p>Halo ${fullname},</p>
              <p>Klik link berikut untuk verifikasi email kamu:</p>
              <a href="http://localhost:3000/api/auth/verify-email?token=${verificationToken}">Verifikasi Sekarang</a>
            `,
          };

          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.error("Gagal kirim email:", err);
              return res.status(500).json({ message: "Gagal kirim email" });
            }

            res.status(201).json({
              message:
                "Registrasi berhasil! Silakan cek email untuk verifikasi.",
            });
          });
        }
      );
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Login
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password wajib diisi" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, result) => {
    if (err)
      return res.status(500).json({ message: "Database error", error: err });

    if (result.length === 0) {
      return res.status(404).json({ message: "Email tidak ditemukan" });
    }

    const user = result[0];

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(401).json({ message: "Password anda salah" });
    }

    if (!user.is_verified) {
      return res.status(401).json({ message: "Email belum diverifikasi" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30s",
    });

    res.status(200).json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  });
};

const verifyEmail = (req, res) => {
  const token = req.query.token;
  if (!token)
    return res.status(400).json({ message: "Invalid verification Token" });

  const sql = "SELECT * FROM users WHERE verification_token = ?";
  db.query(sql, [token], (err, results) => {
    if (err) return res.status(500).json({ message: "Gagal verifikasi" });
    if (results.length === 0)
      return res.status(400).json({ message: "Invalid verification Token" });

    const updateSql =
      "UPDATE users SET is_verified = ?, verification_token = NULL WHERE id = ?";
    db.query(updateSql, [true, results[0].id], (err) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Gagal update status verifikasi" });
      res.status(200).json({ message: "Email Verified Successfully" });
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
  verifyEmail,
};
