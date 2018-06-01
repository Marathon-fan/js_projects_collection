var http = require('http');
var fs = require('fs');
 http.createServer(function(req, res) {
 	fs.appendFile('mynewfile1.txt', 'Hello content!', function(err){
 		if (err) throw err;
 		console.log('Saved!');
 	});
 }).listen(8080);

 //The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

// write file
// delete file: unlink()
// 
