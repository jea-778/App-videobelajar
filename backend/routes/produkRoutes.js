const express = require("express");
const router = express.Router();
const { getProdukHandler } = require("../controllers/produkController");

router.get("/", getProdukHandler);

module.exports = router;
