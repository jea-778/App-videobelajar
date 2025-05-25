const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Tidak ada file yang diunggah" });
  }

  const imageUrl = `/uploads/${req.file.filename}`;
  res.status(200).json({
    message: "Upload berhasil",
    filename: req.file.filename,
    path: imageUrl,
  });
});

module.exports = router;
