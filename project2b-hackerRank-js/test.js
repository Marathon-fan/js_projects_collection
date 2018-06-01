//test.js

var a = 5;
var b = 10;

function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log("." + strings[3] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}

foo`Sum ${a + b}
Product ${a * b}
Division ${b / a}`;


// Now we can see that, the total number of string literals is one more than the number of total cooked expressions. 
// The first string literal is the string before the first cooked expression, the last string literal is the string after 
// the last cooked expression and other literals are in between the cooked expressions.