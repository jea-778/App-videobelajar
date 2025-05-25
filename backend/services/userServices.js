const db = require("../config/db");

// Ambil semua user
const getAllUsers = (callback) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Ambil user id
const getUserId = (id, callback) => {
  const sql = "SELECT * FROM user WHERE id_user = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Insert
const createUser = (data, callback) => {
  const sql =
    "INSERT INTO user (username, email, no_hp, gender, password, role) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    data.username,
    data.email,
    data.no_hp,
    data.gender,
    data.password,
    data.role,
  ];
  db.query(sql, values, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Update
const updateUser = (id, data, callback) => {
  const sql =
    "UPDATE user SET username = ?, email = ?, no_hp = ?, gender = ?, password = ?, role = ? WHERE id_user = ?";
  const values = [
    data.username,
    data.email,
    data.no_hp,
    data.gender,
    data.password,
    data.role,
    id,
  ];
  db.query(sql, values, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Patch
const patchUser = (id, data, callback) => {
  const fields = [];
  const values = [];

  if (data.username) {
    fields.push("username = ?");
    values.push(data.username);
  }
  if (data.email) {
    fields.push("email = ?");
    values.push(data.email);
  }
  if (data.no_hp) {
    fields.push("no_hp = ?");
    values.push(data.no_hp);
  }
  if (data.gender) {
    fields.push("gender = ?");
    values.push(data.gender);
  }
  if (data.password) {
    fields.push("password = ?");
    values.push(data.password);
  }
  if (data.role) {
    fields.push("role = ?");
    values.push(data.role);
  }

  if (fields.length === 0) {
    return callback(new Error("No fields to update"));
  }

  const sql = `UPDATE user SET ${fields.join(", ")} WHERE id_user = ?`;
  values.push(id);

  db.query(sql, values, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Delete
const deleteUser = (id, callback) => {
  const sql = "DELETE FROM user WHERE id_user = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = {
  getAllUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  patchUser,
};
