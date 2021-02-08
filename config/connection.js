// Import the dependencies
const mysql = require("mysql");
const dotenv = require("dotenv").config();

if (process.env.JAWSDB_URL) {
  // Connect DB on Heroku (JawsDB)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Connect to the DB on localhost
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
};

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
