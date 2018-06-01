const fs = require('fs')
const path = require('path')
const async = require('async')

async.map(['demo.json', 'demo-clone.json'], function(name, callback) {

	fs.readFile(path.join(__dirname, name), 'utf-8', function(err, result){
	if (err) {
		return callback(err);
	}
	let object;
	try {
		object = JSON.parse(result);

	} catch(ex) {
		return console.error(ex);
	}
	callback(null, object.name) // ifeverything is ok, we tell the callback there is no error(null)
  });  

}, function(name, results) {
	console.log(results)
})




 // __dirname global var
 // when ready, the callback will be called

