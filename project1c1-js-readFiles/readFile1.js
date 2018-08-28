

var fs = require('fs');

var txtFile = "data1.txt";

let str = fs.readFileSync(txtFile,'utf8');

let arr = str.split('\n');

arr.forEach( line => {
	if (line.substr(line.length - 7, line.length) == 'Westpac') {
		console.log(line);
	}
});

