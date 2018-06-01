

function Set() {
	this.dataStore = [];
	this.add = add;	
	this.show = show;
	this.remove = remove;
	this.size = size;
	this.contains = contains;
	this.union = union;
	this.intersect = interset;
	this.difference = difference;

}

//
function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	}
	return false;
	
}
function remove(data) {
	var pos = this.dataStore.indexOf(data);
	if (pos > -1) {
		this.dataStore.splice(pos, 1);  // The splice() method adds/removes items to/from an array, and returns the removed item(s).
		return true;
	} else {
		return false;
	}	
}
function size() {
	return this.dataStore.length;
}
function contains(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	} else {
		return false;
	}
}
function union(set) {
	var tempset = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		tempset.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.dataStore.length; ++i) {
		if (!tempset.contains(set.dataStore[i])) {
			tempset.dataStore.push(set.dataStore[i]);
		}
	}
	return tempset;
}

function interset(set) {
	var tempset = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		if (set.contains(this.dataStore[i])) {
			tempset.add(this.dataStore[i]);
		}
	}
	return tempset;
}

function difference(set) {
	var tempset = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		if (!set.contains(this.dataStore[i])) {
			tempset.add(this.dataStore[i]);
		}
	}
	return tempset;
}



function show() {
	return this.dataStore;
}
var names = new Set();
names.add("David");
names.add("Jannifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

if (names.add("Mike")) {
	console.log("Mike is added in my set list");
} else {
	console.log("Can't add Mike, must already be in set");
}

console.log(names.show());

var removed = "Mike"
if (names.remove(removed)) {
	console.log(removed + " is removed from set");
} else {
	console.log(removed + " is not removed from set");
}

console.log("-----------------------")
//====
var cis = new Set();
cis.add("Jannifer");
cis.add("Raymond");
cis.add("Clayton");
cis.add("Mike");

var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cythia");
dmp.add("Jonathan");

var it = new Set();
it = cis.union(dmp);
console.log(it.show());

var inter = cis.intersect(dmp);
console.log(inter.show());

var diff = cis.difference(dmp);
console.log(diff.show());