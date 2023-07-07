require("dotenv").config();
const mysql = require("mysql2/promise");
// create the connection to database
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //default: 3306
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
