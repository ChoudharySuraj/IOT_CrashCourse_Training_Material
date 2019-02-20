var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})


app.get('/process_get', function (req, res) {
   console.log(req.query.first_name+ " " + req.query.last_name);
   res.send('Welcome My Dear Friend ' + req.query.first_name + " " + req.query.last_name);
   
})

app.get('/previous', function (req, res) {
   res.send('I am the Previous');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})