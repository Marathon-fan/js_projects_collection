var http = require('http');

 http.createServer(function(req, res) {
 	res.writeHead(200, {'Content-Type': 'text/html'});
 	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
 	res.write('<input type="file" name="filetoupload"><br>');
 	res.write('<input type="submit">');
 	res.write('</form>');
 	return res.end();
 }).listen(8080);

 //The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

// write file
// delete file: unlink()
// 
