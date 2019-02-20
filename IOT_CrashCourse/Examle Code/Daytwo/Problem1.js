var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(' <!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p> \
   <a href="https://github.com/ChoudharySuraj/IOT_CrashCourse_Training_Material">Git to Suraj</a> \
    <button>Click me</button> \
	 <ul> \
	  <li>Nodejs</li>\
	  <li>IOT</li> \
	  <li>Cloud</li> \
	</ul> </body></html> '); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


// this is not the good way of coding. 
// very difficult to maintain.
// let's find something interesting