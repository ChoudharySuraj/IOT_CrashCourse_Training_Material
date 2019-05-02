var express        =         require("express");
var bodyParser     =         require("body-parser");
var mqtt    = require('mqtt');

var app            =         express();

/* initialize Body parser for json and urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

var client  = mqtt.connect('mqtt://iot.eclipse.org');
//var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
	  console.log("connecting client");
	  client.publish('test1234', "Hello World"); //JSON.stringify(user_name)
	  //client.end();
});




app.get('/',function(req,res){
  client.publish('test1234', "Get request /");
});
app.post('/switch',function(req,res){
  
  
  client.publish('test1234', "post request Switch");
	res.end('done');

});

app.post('/search',function(req,res){
  
  client.publish('test1234', "post request Search");
  res.end("done");
});
app.post('/delete',function(req,res){
  
  client.publish('test1234', "Delete");
  res.end("done");
});
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

setInterval(function(){ 


  client.publish('test1234', "I am Alive"); 

}, 10000);