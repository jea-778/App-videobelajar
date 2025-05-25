const express = require("express");
const app = express();
const userService = require("./services/userServices");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const produkRoutes = require("./routes/produkRoutes");
const path = require("path");

require("dotenv").config();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const uploadRoutes = require("./routes/uploadRoutes");
app.use("/api", uploadRoutes);

app.use("/api/produk", produkRoutes);

// Route: ambil semua user
app.get("/user", (req, res) => {
  userService.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
});

// Route: ambil user id
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  userService.getUserId(id, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
    res.json(user);
  });
});

// Route: tambah user
app.post("/user", (req, res) => {
  const data = req.body;
  userService.createUser(data, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User created", id: results.insertId });
  });
});

// Route:update user
app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  userService.updateUser(id, data, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      return res.status(404).json({ message: "User tidak ditemukan" });
    res.json({ message: "User updated" });
  });
});

// Route:patch user
app.patch("/user/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  userService.patchUser(id, data, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      return res.status(404).json({ message: "User tidak ditemukan" });
    res.json({ message: "User updated partially" });
  });
});

// Route: delete user
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  userService.deleteUser(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      return res.status(404).json({ message: "User tidak ditemukan" });
    res.json({ message: "User deleted" });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
