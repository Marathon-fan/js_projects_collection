
// 


var fs = require('fs');

var txtFile = "data3.txt";

let str = fs.readFileSync(txtFile,'utf8');

let arr = str.split('\n');



arr.forEach( line => {
	const newLine  = line.toString();
	for (let i = 0; i < newLine.length; i++) {
		let words = newLine.split(\W+\);
		console.log(words);

	}
});


