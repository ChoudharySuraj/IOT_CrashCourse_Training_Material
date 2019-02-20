var http = require('http');
 
var port = 8081;
var data = '<!DOCTYPE html>\
			<html>\
			<body>\
			<form action="/Myaction" method="get" target="_blank">\
			  First name: <input type="text" name="fname"><br>\
			  Last name: <input type="text" name="lname"><br>\
			  <input type="submit" value="Submit">\
			</form>\
			<p>Click on the submit button, and the input will be sent to a page on the server called "/action_page.php".</p>\
			</body>\
			</html>'; 
var s = http.createServer();
console.log("server started with value = "+s);
s.on('request', function(request, response) {
    response.writeHead(200);
	response.write(data);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);
    response.end();
});
 
s.listen(port);
console.log('Browse to http://127.0.0.1:' + port);