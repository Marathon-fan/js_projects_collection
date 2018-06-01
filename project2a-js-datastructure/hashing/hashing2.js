

// hashing integer keys
// initialization of hash table

function HashTable() {
	this.table = new Array(137);     // an array with its length 137(to avoid collisions)
	this.simpleHash = simpleHash;    
	this.betterHash = betterHash;
	this.showDistribution = showDistribution;
	this.put = put;
}

//
function put(data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}


function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	console.log("Hash value: " + data + "-> " + total);
	return total % this.table.length;
}



function betterHash(string) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; i++) {
		//console.log("--H * total:" + H * total + "charCodeAt i:" + string.charCodeAt(i));
		total += H * total + string.charCodeAt(i);
		//console.log("--total" + total);
	}
	total = total % this.table.length;
	// if (total < 0) {
	// 	total += this.total.length - 1;
	// }
	console.log("Hash value: " + string + "-> " + total);
	return parseInt(total);
}

function showDistribution(num) {
	var n = 0;
	var total = 0;
	for (var i = 0; i < this.table.length; i++) {
		if (this.table[i] != undefined) {
			console.log(i + " : " + this.table[i]);
			total++;
		}
	}
	var flag = "";
	if (total == num) {
		flag = "no"
	}
	console.log("total numbers in hashtable:"+ total + " there is "+ flag +   " collison");
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1));
}

function genStuData(arr) {  // generate random student id
	for (var i = 0; i < arr.length; i++) {
		var num = "";
		for (var j = 1; j <= 9; j++) {
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}

var numStudents = 10;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log("Student data..")
for (var i = 0; i < students.length; i++) {
	console.log(students[i].substring(0,8) + " " + students[i].substring(9));
	// students[i].substring(9));
	// Begin the extraction at position 9, and extract the rest of the string:
}

console.log("Data distribtuion");
var hTable = new HashTable();
for (var i = 0; i < students.length; i++) {
	hTable.put(students[i])
}
hTable.showDistribution(numStudents);
