const db = require("../config/db");

const getAllProduk = (query, callback) => {
  const { search, kategori, durasi, sort } = query;
  const conditions = [];
  const values = [];

  // Filter kategori
  if (kategori) {
    conditions.push("id_kategori = ?");
    values.push(kategori);
  }

  // Search berdasarkan judul_kelas
  if (search) {
    conditions.push("judul_kelas LIKE ?");
    values.push(`%${search}%`);
  }

  // Filter durasi
  if (durasi === "kurang4jam") {
    conditions.push(
      "(durasi LIKE '1%' OR durasi LIKE '2%' OR durasi LIKE '3%')"
    );
  } else if (durasi === "4_8jam") {
    conditions.push(
      "(durasi LIKE '4%' OR durasi LIKE '5%' OR durasi LIKE '6%' OR durasi LIKE '7%' OR durasi LIKE '8%')"
    );
  } else if (durasi === "lebih8jam") {
    conditions.push(
      "(durasi LIKE '9%' OR durasi LIKE '10%' OR durasi LIKE '11%' OR durasi LIKE '12%')"
    );
  }

  // Gabungkan semua kondisi filter
  const whereClause = conditions.length
    ? `WHERE ${conditions.join(" AND ")}`
    : "";

  // Urutan sortir
  let orderBy = "";
  switch (sort) {
    case "harga_terendah":
      orderBy = "ORDER BY harga ASC";
      break;
    case "harga_tertinggi":
      orderBy = "ORDER BY harga DESC";
      break;
    case "a_to_z":
      orderBy = "ORDER BY judul_kelas ASC";
      break;
    case "z_to_a":
      orderBy = "ORDER BY judul_kelas DESC";
      break;
    case "rating_tertinggi":
      orderBy = "ORDER BY rating DESC";
      break;
    case "rating_terendah":
      orderBy = "ORDER BY rating ASC";
      break;
  }

  // SQL akhir
  const sql = `SELECT * FROM produk ${whereClause} ${orderBy}`;

  db.query(sql, values, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = {
  getAllProduk,
};
