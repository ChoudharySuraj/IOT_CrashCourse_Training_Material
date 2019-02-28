var express        =         require("express");
var bodyParser     =         require("body-parser");

var app            =         express();

/* initialize Body parser for json and urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
	console.log("happy to learn heroku");
  res.sendfile("index.htm");
});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

