var http = require('http');
var formidable = require('formidable');


// 1 create an upload form
// 2 parse the uploaded file
// 3 save the file
http.createServer(function(req, res){
	if (req.url == '/fileupload') {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files){
			res.write('File uploaded');
			res.end();
		});
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		return res.end();
	}
}).listen(8080);

