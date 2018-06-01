
let cleanRoom = function() {
	return new Promise(function(resolve, reject) {
		resolve('Cleaned the room ');
	});
};

let removeGarbage = function(message) {
	return new Promise(function(resolve, reject) {
		resolve(message + 'remove Garbage ');
	});
};

let winIcecream = function(message) {
	return new Promise(function(resolve, reject) {
		resolve(message + 'won Icecream ');
	});
};

// after cleanRoom promise is finished, we can run the first then function
cleanRoom().then(function(result) {
	return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
}).then(function(result){
	console.log('finished');
	console.log(result);
});

Promise.all([cleanRoom(), winIcecream(), winIcecream()]).then(function(){  // all finished
	console.log('all finished');
});

Promise.race([cleanRoom(), winIcecream(), winIcecream()]).then(function(){  // any of them is finished
	console.log('one of them is finished');
});