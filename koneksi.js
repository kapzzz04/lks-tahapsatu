var mysql = require("mysql");

// membuat koneksi database
const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
});

conn.connect((err) => {
  if (err) throw err;

  console.log("Mysql terkoneksii");
});

module.exports = conn;
