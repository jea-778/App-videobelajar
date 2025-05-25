const { getAllProduk } = require("../services/produkServices");

const getProdukHandler = (req, res) => {
  getAllProduk(req.query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Gagal mengambil produk", error: err.message });
    }
    res.json({ data: result });
  });
};

module.exports = {
  getProdukHandler,
};
