
// initialization of hash table
function Hashtable() {
	this.table = new Array(137);     // an array with its length 137(to avoid collisions)
	this.simpleHash = simpleHash;    
	this.showDistribution = showDistribution;
	this.put = put;
}

//
function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}

//
function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

// show the basic distribution of the hashing functionality(key and value pair)
function showDistribution() {
	var n = 0;
	for (var i = 0; i < this.table.length; i++) {
		if (this.table[i] != undefined) {
			console.log(i + " : " + this.table[i])
		}
	}
}

// 
var someName = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
console.log(someName);

var hTable = new Hashtable();
for (var i = 0; i < someName.length; i++) {
	hTable.put(someName[i]);
}
hTable.showDistribution()





