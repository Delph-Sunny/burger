// Import the dependencies
require('dotenv').config();
const mysql = require("mysql");
let host = process.env.DB_HOST;
let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
let database = process.env.DB_NAME;
let connection;

console.log(host, user, password, database)

if (process.env.JAWSDB_URL) {
  // Connect DB on Heroku (JawsDB)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Connect to the DB on localhost
  connection = mysql.createConnection({
    host,
    user,
    password,
    database
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
