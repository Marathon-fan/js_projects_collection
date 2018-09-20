
var fs = require('fs');

var txtFile = "students_2.json";

let str = fs.readFileSync(txtFile,'utf8');

let arr = str.split('\n');

console.log('[');
arr.forEach( line => {
	const newLine  = line.toString();
	let tmp = newLine.split(',');
	let res = '{';
	for (let i = 1; i < tmp.length; i++) {
		res += tmp[i] + ',';
	}
	res = res.substring(0, res.length);
	console.log(res);
});
console.log(']');


