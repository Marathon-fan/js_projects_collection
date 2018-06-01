
// initialization of hash table
function HashTable() {
	this.table = new Array(137);     // an array with its length 137(to avoid collisions)
	this.simpleHash = simpleHash;    
	this.betterHash = betterHash;
	this.showDistribution = showDistribution;
	this.put = put;
}


function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	console.log("Hash value: " + data + "-> " + total);
	return total % this.table.length;
}

//
function put(data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}

function betterHash(string) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; i++) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.total.length - 1;
	}
	return parseInt(total);
}

function showDistribution() {
	var n = 0;
	for (var i = 0; i < this.table.length; i++) {
		if (this.table[i] != undefined) {
			console.log(i + " : " + this.table[i]);
		}
	}
}


var someName = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
console.log(someName);
var hTable = new HashTable();
for (var i = 0; i < someName.length; i++) {
	hTable.put(someName[i]);
}

hTable.showDistribution();

