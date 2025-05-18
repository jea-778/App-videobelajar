const express = require("express");
const app = express();
const userService = require("./services/userServices");
require("dotenv").config();

app.use(express.json());

// Route: ambil semua user
app.get("/users", (req, res) => {
  userService.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
});

// Route: ambil user id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  userService.getUserId(id, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
    res.json(user);
  });
});

// Route: tambah user
app.post("/users", (req, res) => {
  const data = req.body;
  userService.createUser(data, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User created", id: results.insertId });
  });
});

// Route:update user
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  userService.updateUser(id, data, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated" });
  });
});

// Route:patch user
app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  userService.patchUser(id, data, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated partially" });
  });
});

// Route: delete user
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  userService.deleteUser(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
