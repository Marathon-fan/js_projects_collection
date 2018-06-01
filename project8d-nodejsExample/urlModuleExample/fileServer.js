var http = require('http');
var url = require('url');
var fs = require('fs');

 http.createServer(function(req, res) {
 	var q = url.parse(req.url, true);
 	var filename = "." + q.pathname;
 	fs.readFile(filename, function(err, data) { //The fs.readFile() method is used to read files on your computer.
 		if (err) {
 			res.writeHead(404, {'Content-Type': 'text/html'});
 			return res.end("404 Not Found");
 		}
 		res.writeHead(200, {'Content-Type': 'text/html'});
 		res.write(data);
 		return res.end();
 	});

 }).listen(8080);

 //The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

// write file
// delete file: unlink()
// 

