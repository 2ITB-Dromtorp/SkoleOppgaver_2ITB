const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');
var cors = require('cors')
var bodyParser = require('body-parser');

app.use(cors())

// parse application/json
app.use(bodyParser.json())


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

//Hvis du skal lese noe fra databasen/backend, bruk GET request. 
app.get('/', (request, response) => {

  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
  
})

app.get("/updateuser/:newhobby/:id", (request, response) => {

  //http://localhost:3000/updateuser/karate/12
  //http://localhost:3000/updateuser/svømming/5
  
  let newhobby = request.params.newhobby;
  let id = request.params.id;
  console.log(newhobby);
  let sqlquery = 'UPDATE elev SET hobby=? WHERE ElevID=?';

  connection.query(sqlquery, [newhobby, id], function (error, results, fields) {
    if (error) throw error;
    response.send('If This works, you have updated elevid '+id+' with a new hobby '+ newhobby);
  });

  
})

//Hvis du skal sende noe til databasen/backend, bruk POST request. 
app.post("/updateuser", (request, response) => {

  let data = request.body;

  let newhobby = data.newhobby;
  let id = data.elevid;

  console.log("data from post is " + JSON.stringify(newhobby), id)

  let sqlquery = 'UPDATE elev SET hobby=? WHERE ElevID=?';

  connection.query(sqlquery, [newhobby, id], function (error, results, fields) {
    if (error) throw error;
    response.send('If This works, you have updated elevid '+id+' with a new hobby '+ newhobby);
  });
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

