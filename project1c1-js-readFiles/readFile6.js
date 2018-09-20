
var fs = require('fs');

var txtFile = "students.json";

let str = fs.readFileSync(txtFile,'utf8');

let arr = str.split('\n');

console.log('[');
arr.forEach( line => {
	const newLine  = line.toString();
	let res = newLine + ',' ;
	console.log(res);
});
console.log(']');


