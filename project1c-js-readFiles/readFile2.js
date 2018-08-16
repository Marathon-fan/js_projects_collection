
// parenthesis pairing


var fs = require('fs');

var txtFile = "data2.txt";

let str = fs.readFileSync(txtFile,'utf8');

let arr = str.split('\n');

let countLeftCurlyBrackets = 0;
let countRightCurlyBrackets = 0;

arr.forEach( line => {
	const newLine  = line.toString();
	for (let i = 0; i < newLine.length; i++) {
		if (newLine[i] === '{') {
			countLeftCurlyBrackets++;
		}
		if (newLine[i] === '}') {
			countRightCurlyBrackets++;
		}
	}
});
console.log(countLeftCurlyBrackets);
console.log(countRightCurlyBrackets);


