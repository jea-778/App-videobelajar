const express = require("express");
const router = express.Router();
const db = require("../config/db");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/", verifyToken, (req, res) => {
  const userId = req.user.id;
  db.query(
    "SELECT id, fullname, email FROM users WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res.status(404).json({ message: "User tidak ditemukan" });

      res.json(results[0]);
    }
  );
});

module.exports = router;
