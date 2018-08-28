
var fs = require('fs');

var txtFile = "data3.txt";

let str = fs.readFileSync(txtFile,'utf8');

let arr = str.split('\n');

let res = 0.0;
const re = new RegExp('\\s+');
arr.forEach( line => {
	const newLine  = line.toString();
	words = newLine.split(re);
	res += parseFloat(words[3]);

});
console.log(res);


