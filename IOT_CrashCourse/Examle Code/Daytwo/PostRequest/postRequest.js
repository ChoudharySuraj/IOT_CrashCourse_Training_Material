var http = require('http');
 
var port = 8081;
var htmlpage = '<!DOCTYPE html>\
			<html>\
			<body>\
			<form action="/" method="post"> \
			  First name: <input type="text" name="fname"><br>\
			  Last name: <input type="text" name="lname"><br>\
			  <input type="submit" value="Submit">\
			</form> \
			<p>Click on the submit button, and the input will be sent to a page on the server called "/action_page.php".</p>\
			</body>\
			</html>'; 
var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);
 
    var data = '';
    request.on('data', function(chunk) {
        data += chunk.toString();
    });
    request.on('end', function() {
        console.log(data);
        response.write(htmlpage);
        response.end();
    });
 
});
 
s.listen(port);
console.log('Browse to http://127.0.0.1:' + port);