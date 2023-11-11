// connection.js
const mysql = require('mysql2');

// Set up MySQL connection
const connection = mysql.createConnection({
    host: 'm7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'cqo8u0czmd2vy01i',
    password: 'vahxeek3zv6x6jxp',
    database: 'vvjf88xbh6hjty6h',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
