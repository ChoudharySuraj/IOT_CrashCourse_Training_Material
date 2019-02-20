var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})


app.get('/next', function (req, res) {
   res.send('I am the Next');
})

app.get('/previous', function (req, res) {
   res.send('I am the Previous');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})