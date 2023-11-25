"use strict";

var response = require("./res");
var connection = require("./koneksi");

// menampilkan semua data
exports.tampilsemuauser = function (req, res) {
  connection.query(
    "SELECT * FROM registrasilks",
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menampilkan semua data userbias berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM registrasilks WHERE id=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambahkan data registrasiLks
exports.tambahUser = function (req, res) {
  var nama = req.body.nama;
  var username = req.body.username;
  var password = req.body.password;
  var alamat = req.body.alamat;
  var hobi = req.body.hobi;
  var jeniskelamin = req.body.jeniskelamin;

  connection.query(
    "INSERT INTO registrasilks (nama, username, password, alamat, hobi, jeniskelamin) VALUES (?, ?, ?, ?, ?, ?)",
    [nama, username, password, alamat, hobi, jeniskelamin],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

// INSERT INTO registrasilks (nama, username, password, alamat, hobi, jeniskelamin) VALUES ('keyla', 'kapzzz04', 'keyla123', 'kampung andar', 'makan', 'perempuan')
// INSERT INTO registrasilks (nama, username, password, alamat, hobi, jeniskelamin) VALUES ('keyla', 'kapzzz04', 'keyla123', 'kampung andar', 'makan', 'perempuan')

//mengubah data berdasarkan id
exports.ubahUser = function (req, res) {
  var id = req.body.id;
  var nama = req.body.username;
  var username = req.body.nama;
  var password = req.body.password;
  var alamat = req.body.alamat;
  var hobi = req.body.hobi;
  var jeniskelamin = req.body.jeniskelamin;

  connection.query(
    "UPDATE registrasilks SET nama=?, username=?, password=?, alamat=?, hobi=?, jeniskelamin=? WHERE id=?",
    [nama, username, password, alamat, hobi, jeniskelamin, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Ubah Data", res);
      }
    }
  );
};

// menghapus data berdasarkan id
exports.hapusUser = function (req, res) {
  var id = req.body.id_user;
  connection.query(
    "DELETE FROM registrasilks WHERE id=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Hapus Data", res);
      }
    }
  );
};
