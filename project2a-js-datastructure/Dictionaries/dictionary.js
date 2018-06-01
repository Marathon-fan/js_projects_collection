

function Dictionary() {
	this.add = add;
	this.dataStore = [];
	this.find = find;
	this.remove = remove;
}

//
function add(key, value) {
	this.dataStore[key] = value;
}
function remove(key) {
	delete this.dataStore[key];
}
function find(key) {
	return this.dataStore[key];
}

//
var pbook = new Dictionary();
pbook.add("Mike",  "123");
pbook.add("David", "456");
pbook.add("Cynthia", "789");

console.log("David's entension is " + pbook.find("David"));
console.log("Mike's entension is " + pbook.find("Mike"));
console.log("Cynthia's entension is " + pbook.find("Cynthia"));

pbook.remove("David");
console.log("David's entension is " + pbook.find("David"));

