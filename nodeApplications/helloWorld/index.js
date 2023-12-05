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


app.get('/', (request, response) => {

  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
  
})

app.get("/updateuser/:newhobby/:id", (request, response) => {
  
  let newhobby = request.params.newhobby;
  let id = request.params.id;
  console.log(newhobby);
  let sqlquery = 'UPDATE elev SET hobby=? WHERE ElevID=?';

  connection.query(sqlquery, [newhobby, id], function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });

  response.send('If This works, great!');
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

