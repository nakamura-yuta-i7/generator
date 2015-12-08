var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yuta0502',
  database : 'express4-sample'
});

module.exports = connection
