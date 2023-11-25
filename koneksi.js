var mysql = require("mysql");

// membuat koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "S098765l@",
  database: "dbregistrasi",
});

conn.connect((err) => {
  if (err) throw err;

  console.log("Mysql terkoneksii");
});

module.exports = conn;
