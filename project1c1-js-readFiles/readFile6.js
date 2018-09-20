
var fs = require('graceful-fs')

var txtFile = "restaurants.json";  // or students

let str = fs.readFileSync(txtFile,'utf8');

let arr = str.split('\n');

let content = '[' + '\n';
fs.appendFile('out.json', content, function (err) {
  if (err) throw err;
  console.log('Saved! + content');
});


arr.forEach( line => {
	const newLine  = line.toString();
	content = newLine + ',' + '\n';
	fs.appendFile('out.json', content, function (err) {
	  if (err) throw err;
	  console.log('Saved! + content');
	});
});


content = ']'  + '\n';
fs.appendFile('out.json', content, function (err) {
  if (err) throw err;
  console.log('Saved! + content');
});

