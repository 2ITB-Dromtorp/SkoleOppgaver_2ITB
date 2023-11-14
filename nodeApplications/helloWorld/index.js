const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'johu',
  password: 'dromtorp',
  database: 'dromtorp'
});

connection.connect(function(err) {

  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM elev', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

app.get('/', (request, response) => {
  response.send('Hello World!!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

