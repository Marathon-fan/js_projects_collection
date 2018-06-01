var async = require('async');
var stack=[];

function function1(callback) {
	console.log("this is a test");
	callback(null, "this is function1");
	// callback("error", null);

}

function function2(callback) {
	console.log("this is a test again");
	callback(null, "this is function2");
}


function function3(callback) {
	callback(null, "this is function3");
}

stack.push(function1);
stack.push(function2);
stack.push(function3);

async.parallel(stack, function(error, result){
	console.log(result); // this funciton runs last. only when the former three functions executes successfully, this callback will run

});