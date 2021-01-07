//MySQL connection.
var mysql = require("mysql");
var connection;
//
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "i7kq82s5sfdqvqeo",
  password: "yfm68vhalr75wppr",
  database: "gabxd02gy6sa9dbs"
})
};



//
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//
module.exports = connection;