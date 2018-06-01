
var zero = 0;

var positiveNumbers = [1, 2, 3];

var negativeNumbers = [-3, -2, -1];

var numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers); 

var isEven = function(x) {
	console.log(x);
	return (x % 2 == 0) ? true : false;
}

var numbers1 = [1,2,3,4,5,6,7,8,9,10];
numbers1.every(isEven);

numbers1.forEach(function(x) {
	console.log((x%2 == 0));
})

//numbers2
var numbers2 = [7, 9, 1, 3];

console.log(numbers2.sort());

function compare(a, b) {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
	return 0;
}

console.log(compare(4, 9));