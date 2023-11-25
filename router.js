"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.get("/index", (req, res) => {
    res.render("index");
  });

  app.get("/daftar", (req, res) => {
    res.render("daftar");
  });

  app.get("/masuk", (req, res) => {
    res.render("masuk");
  });

  app.get("/nav", (req, res) => {
    res.render("nav");
  });

  app.get("/footer", (req, res) => {
    res.render("footer");
  });

  app.get("/visi-misi", (req, res) => {
    res.render("visi-misi");
  });

  app.get("/rpl", (req, res) => {
    res.render("rpl");
  });

  app.get("/tsm", (req, res) => {
    res.render("tsm");
  });

  app.get("/bd", (req, res) => {
    res.render("bd");
  });
  app.get("/titl", (req, res) => {
    res.render("titl");
  });
  app.get("/dpib", (req, res) => {
    res.render("dpib");
  });
  app.get("/sejarah", (req, res) => {
    res.render("sejarah");
  });

  app.route("/semuauser").get(jsonku.tampilsemuauser);

  app.route("/semuauser/:id").get(jsonku.tampilberdasarkanid);

  app.route("/tambah").post(jsonku.tambahUser);

  app.route("/ubah").put(jsonku.ubahUser);

  app.route("/hapus").delete(jsonku.hapusUser);
};
