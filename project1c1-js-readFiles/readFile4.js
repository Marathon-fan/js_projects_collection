
var fs = require('fs');

var txtFile = "data4.txt";

let str = fs.readFileSync(txtFile,'utf8');

let arr = str.split('\n');

const re = new RegExp('\\s+');
arr.forEach( line => {
	const newLine  = line.toString();
	words = newLine.split(re);
	let res = 'const ';
	for (let i = 0; i < words.length - 1; i++) {
		res = res + words[i].toUpperCase() + '_';		
	}
	res = res + '_SF_ID' + ' = ' + '\'' + words[words.length -1] + '\';';
	console.log(res);
});


