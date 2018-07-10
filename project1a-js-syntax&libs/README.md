# javascript


## syntax  

### Spread syntax   

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```

The Spread Syntax.  
The spread syntax is simply three dots: ...    
It allows an iterable to expand in places where 0+ arguments are expected.    
```
var mid = [3, 4];
var arr1 = [1, 2, mid, 5, 6];

var arr2 = [1, 2, ...mid, 5, 6]

console.log(arr1);

console.log(arr2);

////////////////////////

var arr3 = [2, 4, 8, 6, 10, 1, 3, 4];
var max = Math.max(...arr3)
console.log(max)

```

### _   
_ is a valid variable identifier in JavaScript, and could theoretically refer to anything. Using _(...) with function syntax implies that _ is a function.

That said, it is commonly used by the underscore.js library, however if you're looking at minified code, it's quite possibly being used as another single-character variable name to save on file size.


### function*  

The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

Generators in JavaScript -- especially when combined with Promises -- are a very powerful tool for asynchronous programming as they mitigate -- if not entirely eliminate -- the problems with callbacks, such as Callback Hell and Inversion of Control. 
This pattern is what async functions are built on top of.

Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value as a boolean. Calling the next() method with an argument will resume the generator function execution, replacing the yield expression where execution was paused with the argument from next(). 

```
function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20


function* idMaker() {
  var index = 0;
  while (index < index+1)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...


```

### Object.keys() and  Object.values()

The Object.keys() method returns an array of a given object's property names, in the same order as we get with a normal loop.

```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

console.log(Object.values(object1));

// expected output:Array ["something", 42, false]

```

### __proto__    

```
var alien = {
  kind: 'alien'
}

// and a person object
var person = {
  kind: 'person'
}

// and an object called 'zack'
var zack = {};

// assign alien as the prototype of zack
zack.__proto__ = alien

// zack is now linked to alien
// it 'inherits' the properties of alien
console.log(zack.kind); //=> ‘alien’

// assign person as the prototype of zack
zack.__proto__ = person

// and now zack is linked to person
console.log(zack.kind); //=> ‘person’
```

### yield

The yield keyword is used to pause and resume a generator function (function* or legacy generator function).

```
function* foo(index) {
  while (index < 2) {
    yield index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// expected output: 0

console.log(iterator.next().value);
// expected output: 1
```

### The reduce() method  

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```




## libs   

### loadsh    

https://lodash.com/docs/
```
$> npm i --save lodash


_.isEmpty(value)
source npm package

Checks if value is an empty object, collection, map, or set.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.


_.merge(object, [sources])
source npm package

This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

Note: This method mutates object.

var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }


```

### winston    

winston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each winston logger can have multiple transports (see: Transports) configured at different levels (see: Logging levels). For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file.

### dotenv   

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

https://www.npmjs.com/package/dotenv

### Validate   
Validate.js provides a declarative way of validating javascript objects. It is unit tested with 100% code coverage and can be considered fit for production.

### co   
Gitter NPM version Build status Test coverage Downloads

Generator based control flow goodness for nodejs and the browser, using promises, letting you write non-blocking code in a nice-ish way.


### cors   
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### helmet   
Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

### compression   
Node.js compression middleware.
The following compression codings are supported:
```
deflate
gzip
```

### body-parser   
body-parser

Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.


### hpp   

Express middleware to protect against HTTP Parameter Pollution attacks

By default all top-level parameters in req.body are checked for being an array. If a parameter is an array the array is moved to req.bodyPolluted and req.body is assigned the last value of the array:
```
POST firstname=John&firstname=Alice&lastname=Doe

=>

req: {
    body: {
        firstname: 'Alice',
        lastname: 'Doe',
    },
    bodyPolluted: {
        firstname: [ 'John', 'Alice' ]
    }
}
```


### express-jwt   

Middleware that validates JsonWebTokens and sets req.user.

This module lets you authenticate HTTP requests using JWT tokens in your Node.js applications. JWTs are typically used to protect API endpoints, and are often issued using OpenID Connect.


### express-validator   

An express.js middleware for validator.


### qs   
A querystring parsing and stringifying library with some added security.


### request   

Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

### node-fetch   

A light-weight module that brings window.fetch to Node.js

Instead of implementing XMLHttpRequest in Node.js to run browser-specific Fetch polyfill, why not go from native http to fetch API directly? Hence node-fetch, minimal code for a window.fetch compatible API on Node.js runtime.


### node-uuid/uuid   

Simple, fast generation of RFC4122 UUIDS.



### co   



### co   



### co   



### co   



### co   





////////////////////////////////////


////////////////////////////////////
js data types

According to the latest ECMAScript release, these are the data types:
```
Boolean                        true/false

Null                           The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values.

Undefined
Number
String
Symbol
Object
```

Boolean
```
console.log(10 > 9);
console.log(10 < 9);
```


```
function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}
//This just matches against the regex (g makes it search the whole string, i makes it case-insensitive) and returns the number of matches. We check for null incase there are no matches (ie no vowels), and return 0 in that case.



console.log(getVowels('sky'));
// expected output: 0

```

js


37 Essential JavaScript Interview Questions *
1.9K
SHARES




SUBMIT AN INTERVIEW QUESTION
Looking for experts? Check out Toptal’s JavaScript developers.
question badge
What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

View the answer →
question badge
What will the code below output to the console and why?

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
View the answer →
question badge
What will the code below output to the console and why?

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
View the answer →
Find top JavaScript developers today. Toptal can match you with the best engineers to finish your project.

HIRE TOPTAL’S JAVASCRIPT DEVELOPERS
question badge
What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

View the answer →
question badge
What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

View the answer →
question badge
Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
View the answer →
question badge
What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

View the answer →
question badge
What will the code below output? Explain your answer.

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
View the answer →
question badge
Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

View the answer →
question badge
In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
View the answer →
question badge
Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

View the answer →
question badge
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
View the answer →
question badge
Consider the following code snippet:

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
(a) What gets logged to the console when the user clicks on “Button 4” and why?

(b) Provide one or more alternate implementations that will work as expected.

View the answer →
question badge
Assuming d is an “empty” object in scope, say:

var d = {};
…what is accomplished using the following code?

[ 'zebra', 'horse' ].forEach(function(k) {
  d[k] = undefined;
});
View the answer →
question badge
What will the code below output to the console and why?

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
View the answer →
question badge
What will the code below output to the console and why ?

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
View the answer →
question badge
The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
View the answer →
question badge
What is a “closure” in JavaScript? Provide an example.

View the answer →
question badge
What will be the output of the following code:

for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
Explain your answer. How could the use of closures help here?

View the answer →
question badge
What would the following lines of code output to the console?

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
Explain your answer.

View the answer →
question badge
What will be the output when the following code is executed? Explain.

console.log(false == '0')
console.log(false === '0')
View the answer →
question badge
What is the output out of the following code? Explain your answer.

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
View the answer →
question badge
What will the following code output to the console:

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
Explain your answer.

View the answer →
question badge
Consider the code snippet below. What will the console output be and why?

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
View the answer →
question badge
What will the following code output to the console and why:

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
What is the issue with this code and how can it be fixed.

View the answer →
question badge
Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

The arguments to the function should be:

a DOM element
a callback function (that takes a DOM element as its argument)
View the answer →
question badge
Testing your this knowledge in JavaScript: What is the output of the following code?

var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
View the answer →
question badge
Consider the following code. What will the output be, and why?

(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
View the answer →
question badge
What will be the output of this code?

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
View the answer →
question badge
How do you clone an object?

View the answer →
question badge
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
What will this code print?

View the answer →
question badge
What do the following lines output, and why?

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
View the answer →
question badge
How do you add an element at the begining of an array? How do you add one at the end?

View the answer →
question badge
Imagine you have this code:

var a = [1, 2, 3];
a) Will this result in a crash?

a[10] = 99;
b) What will this output?

console.log(a[6]);
View the answer →
question badge
What is the value of typeof undefined == typeof NULL?

View the answer →
question badge
What would following code return?

console.log(typeof typeof 1);
View the answer →
question badge
What will the following code output and why?

var b = 1;
function outer(){
    var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();

//////////////////////////////



Top 85 JavaScript Interview Questions & Answers 

 
1. What is JavaScript?

JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language

2. Enumerate the differences between Java and JavaScript?

Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent.  Java is an object – oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language.

3. What are JavaScript Data Types?

Following are the JavaScript Data types:

Number
String
Boolean
Function
Object
Undefined
4. What is the use of isNaN function?

isNan function returns true if the argument is not a number otherwise it is false.

5. Between JavaScript and an ASP script, which is faster?

JavaScript is faster. JavaScript is a client-side language and thus it does not need the assistance of the web server to execute. On the other hand, ASP is a server-side language and hence is always slower than JavaScript.  Javascript now is also a server side language (nodejs).

javascript-code-snippet
Javascript

6. What is negative infinity?

Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.

7. Is it possible to break JavaScript Code into several lines?

Breaking within a string statement can be done by the use of a backslash, ‘\’, at the end of the first line

Example:


document.write("This is \a program");
1
document.write("This is \a program");
And if you change to a new line when not within a string statement, then javaScript ignores break in line.


 
Example:


var x=1, y=2,
z=
x+y;
1
2
3
4
5
var x=1, y=2,
 
z=
 
x+y;
The above code is perfectly fine, though not advisable as it hampers debugging.

8. Which company developed JavaScript?

Netscape is the software company who developed JavaScript.

9. What are undeclared and undefined variables?

Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.

Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.

10. Write the code for adding new elements dynamically?


<html> 
<head> <title>t1</title> 
<script type="text/javascript"> 
function addNode() { var newP = document.createElement("p"); 
var textNode = document.createTextNode(" This is a new text node"); 
newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP); } 
</script> </head> 
<body> <p id="firstP">firstP<p> </body> 
</html>
1
2
3
4
5
6
7
8
9
<html> 
<head> <title>t1</title> 
<script type="text/javascript"> 
function addNode() { var newP = document.createElement("p"); 
var textNode = document.createTextNode(" This is a new text node"); 
newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP); } 
</script> </head> 
<body> <p id="firstP">firstP<p> </body> 
</html>
11. What are global variables? How are these variable declared and what are the problems associated with using them?

Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared.

Example:

// Declare a global globalVariable = “Test”;

The problems that are faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.

12. What is a prompt box?

A prompt box is a box which allows the user to enter input by providing a text box.  Label and box will be provided to enter the text or number.

13. What is ‘this’ keyword in JavaScript?

‘This’ keyword refers to the object from where it was called.

14. Explain the working of timers in JavaScript? Also elucidate the drawbacks of using the timer, if any?

Timers are used to execute a piece of code at a set time or also to repeat the code in a given interval of time. This is done by using the functions setTimeout, setInterval and clearInterval.

The setTimeout(function, delay) function is used to start a timer that calls a particular function after the mentioned delay. The setInterval(function, delay) function is used to repeatedly execute the given function in the mentioned delay and only halts when cancelled. The clearInterval(id) function instructs the timer to stop.

Timers are operated within a single thread, and thus events might queue up, waiting to be executed.

15. Which symbol is used for comments in Javascript?

// for Single line comments and

/*   Multi

Line

Comment

*/

16. What is the difference between ViewState and SessionState?

‘ViewState’ is specific to a page in a session.

‘SessionState’ is specific to user specific data that can be accessed across all pages in the web application.

17. What is === operator?

=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.

18. Explain how can you submit a form using JavaScript?

To submit a form using JavaScript use document.form[0].submit();

document.form[0].submit();

19. Does JavaScript support automatic type conversion?

Yes JavaScript does support automatic type conversion, it is the common way of type conversion used by JavaScript developers

20. How can the style/class of an element be changed?

It can be done in the following way:


document.getElementById(“myText”).style.fontSize = “20?;
1
document.getElementById(“myText”).style.fontSize = “20?;
or


document.getElementById(“myText”).className = “anyclass”;
1
document.getElementById(“myText”).className = “anyclass”;
21. Explain how to read and write a file using JavaScript?

There are two ways to read and write a file using JavaScript

Using JavaScript extensions
Using a web page and Active X objects
 22. What are all the looping structures in JavaScript?

Following are looping structures in Javascript:

For
While
do-while loops
23. What is called Variable typing in Javascript?

Variable typing is used to assign a number to a variable and the same variable can be assigned to a string.

Example


i = 10;
i = "string";
1
2
3
i = 10;
 
i = "string";
This is called variable typing.

24. How can you convert the string of any base to integer in JavaScript?

The parseInt() function is used to convert numbers between different bases. parseInt() takes the string to be converted as its first parameter, and the second parameter is the base of the given string.

In order to convert 4F (of base 16) to integer, the code used will be –


parseInt ("4F", 16);
1
parseInt ("4F", 16);
25. Explain the difference between “==” and “===”?

“==” checks only for equality in value whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different.

26. What would be the result of 3+2+”7″?

Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57.

27. Explain how to detect the operating system on the client machine?

In order to detect the operating system on the client machine, the navigator.platform string (property) should be used.

28. What do mean by NULL in Javascript?

The NULL value is used to represent no value or no object.  It implies no object or null string, no valid boolean value, no number and no array object.

29. What is the function of delete operator?

The delete keyword is used to delete the property as well as its value.

Example

var student= {age:20, batch:”ABC”};
delete student.age;

30. What is an undefined value in JavaScript?

Undefined value means the

Variable used in the code doesn’t exist
Variable is not assigned to any value
Property doesn’t exist
31. What are all the types of Pop up boxes available in JavaScript?

Alert
Confirm and
Prompt
32. What is the use of Void(0)?

Void(0) is used to prevent the page from refreshing and parameter “zero” is passed while calling.

Void(0) is used to call another method without refreshing the page.

33. How can a page be forced to load another page in JavaScript?

The following code has to be inserted to achieve the desired effect:


<script language="JavaScript" type="text/javascript" >
<!-- location.href="http://newhost/newpath/newfile.html"; //--></script>
1
2
3
<script language="JavaScript" type="text/javascript" >
 
<!-- location.href="http://newhost/newpath/newfile.html"; //--></script>
34. What is the data type of variables of in JavaScript?

All variables in the JavaScript are object data types.

35. What is the difference between an alert box and a confirmation box?

An alert box displays only one button which is the OK button.

But a Confirmation box displays two buttons namely OK and cancel.

36. What are escape characters?

Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes and ampersands. Place backslash before the characters to make it display.

Example:


document.write "I m a "good" boy"
document.write "I m a \"good\" boy"
1
2
3
document.write "I m a "good" boy"
 
document.write "I m a \"good\" boy"
37. What are JavaScript Cookies?

Cookies are the small test files stored in a computer and it gets created when the user visits the websites to store information that they need. Example could be User Name details and shopping cart information from the previous visits.

38. Explain what is pop()method in JavaScript?

The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array.  Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.
Example:
var cloths = [“Shirt”, “Pant”, “TShirt”];
cloths.pop();
//Now cloth becomes Shirt,Pant

39. Whether JavaScript has concept level scope?

No. JavaScript does not have concept level scope. The variable declared inside the function has scope inside the function.

40. Mention what is the disadvantage of using innerHTML in JavaScript?

If you use innerHTML in JavaScript the disadvantage is

Content is replaced everywhere
We cannot use like “appending to innerHTML”
Even if you use +=like “innerHTML = innerHTML + ‘html’” still the old content is replaced by html
The entire innerHTML content is re-parsed and build into elements, therefore its much slower
The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it
41. What is break and continue statements?

Break statement exits from the current loop.

Continue statement continues with next statement of the loop.

42. What are the two basic groups of dataypes in JavaScript?

They are as –

Primitive
Reference types.
Primitive types are number and Boolean data types. Reference types are more complex types like strings and dates.

43. How generic objects can be created?

Generic objects can be created as:


var I = new object();
1
var I = new object();
44. What is the use of type of operator?

‘Typeof’ is an operator which is used to return a string description of the type of a variable.

45. Which keywords are used to handle exceptions?

Try… Catch—finally is used to handle exceptions in the JavaScript


Try{
Code
}
Catch(exp){
Code to throw an exception
}
Finally{
Code runs either it finishes successfully or after catch
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
Try{
 
Code
 
}
 
Catch(exp){
 
Code to throw an exception
 
}
 
Finally{
 
Code runs either it finishes successfully or after catch
 
}
46. Which keyword is used to print the text in the screen?

document.write(“Welcome”) is used to print the text – Welcome in the screen.

47. What is the use of blur function?

Blur function is used to remove the focus from the specified object.

48. What is variable typing?

Variable typing is used to assign a number to a variable and then assign string to the same variable. Example is as follows:


i= 8;
i=”john”;
1
2
3
i= 8;
 
i=”john”;
49. How to find operating system in the client machine using JavaScript?

The ‘Navigator.appversion’ is used to find the name of the operating system in the client machine.

50. What are the different types of errors in JavaScript?

There are three types of errors:

Load time errors: Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically.
Run time errors: Errors that come due to misuse of the command inside the HTML language.
Logical Errors: These are the errors that occur due to the bad logic performed on a function which is having different operation.
51. What is the use of Push method in JavaScript?

The push method is used to add or append one or more elements to the end of an Array. Using this method, we can append multiple elements by passing multiple arguments

52. What is unshift method in JavaScript?

Unshift method is like push method which works at the beginning of the array.  This method is used to prepend one or more elements to the beginning of the array.

53. What is the difference between JavaScript and Jscript?

Both are almost similar. JavaScript is developed by Netscape and Jscript was developed by Microsoft .

 

54. How are object properties assigned?

Properties are assigned to objects in the following way –


obj["class"] = 12;
1
obj["class"] = 12;
or


obj.class = 12;
1
obj.class = 12;
55. What is the ‘Strict’ mode in JavaScript and how can it be enabled?

Strict Mode adds certain compulsions to JavaScript. Under the strict mode, JavaScript shows errors for a piece of codes, which did not show an error before, but might be problematic and potentially unsafe. Strict mode also solves some mistakes that hamper the JavaScript engines to work efficiently.

Strict mode can be enabled by adding the string literal “use strict” above the file. This can be illustrated by the given example:


function myfunction()
{
“use strict";
var v = “This is a strict mode function";
}
1
2
3
4
5
6
7
8
9
function myfunction()
 
{
 
“use strict";
 
var v = “This is a strict mode function";
 
}
56. What is the way to get the status of a CheckBox?

The status can be acquired as follows –

alert(document.getElementById(‘checkbox1’).checked);

If the CheckBox will be checked, this alert will return TRUE.

57. How can the OS of the client machine be detected?

The navigator.appVersion string can be used to detect the operating system on the client machine.

58. Explain window.onload and onDocumentReady?

The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed.

onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code.


 
59. How will you explain closures in JavaScript? When are they used?

Closure is a locally declared variable related to a function which stays in memory when the function has returned.

For example:


function greet(message) {
console.log(message);
}
function greeter(name, age) {
return name + " says howdy!! He is " + age + " years old";
}
// Generate the message
var message = greeter("James", 23);
// Pass it explicitly to greet
greet(message);
This function can be better represented by using closures
function greeter(name, age) {
var message = name + " says howdy!! He is " + age + " years old";
return function greet() {
console.log(message);
};
}
// Generate the closure
var JamesGreeter = greeter("James", 23);
// Use the closure
JamesGreeter();
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
function greet(message) {
 
console.log(message);
 
}
 
function greeter(name, age) {
 
return name + " says howdy!! He is " + age + " years old";
 
}
 
// Generate the message
 
var message = greeter("James", 23);
 
// Pass it explicitly to greet
 
greet(message);
 
This function can be better represented by using closures
 
function greeter(name, age) {
 
var message = name + " says howdy!! He is " + age + " years old";
 
return function greet() {
 
console.log(message);
 
};
 
}
 
// Generate the closure
 
var JamesGreeter = greeter("James", 23);
 
// Use the closure
 
JamesGreeter();
60. How can a value be appended to an array?

A value can be appended to an array in the given manner –

arr[arr.length] = value;

61. Explain the for-in loop?

The for-in loop is used to loop through the properties of an object.

The syntax for the for-in loop is –


for (variable name in object){
statement or block to execute
}
1
2
3
4
5
for (variable name in object){
 
statement or block to execute
 
}
In each repetition, one property from the object is associated to the variable name, and the loop is continued till all the properties of the object are depleted.

62. Describe the properties of an anonymous function in JavaScript?

A function that is declared without any named identifier is known as an anonymous function. In general, an anonymous function is inaccessible after its declaration.

Anonymous function declaration –


var anon = function() {
alert('I am anonymous');
};
anon();
1
2
3
4
5
6
7
var anon = function() {
 
alert('I am anonymous');
 
};
 
anon();
63. What is the difference between .call() and .apply()?

The function .call() and .apply() are very similar in their usage except a little difference. .call() is used when the number of the function’s arguments are known to the programmer, as they have to be mentioned as arguments in the call statement. On the other hand, .apply() is used when the number is not known. The function .apply() expects the argument to be an array.

The basic difference between .call() and .apply() is in the way arguments are passed to the function. Their usage can be illustrated by the given example.


var someObject = {
myProperty : 'Foo',
myMethod : function(prefix, postfix) {
alert(prefix + this.myProperty + postfix);
}
};
someObject.myMethod('<', '>'); // alerts '<Foo>'
var someOtherObject  = {
myProperty : 'Bar'
};
someObject.myMethod.call(someOtherObject, '<', '>'); // alerts '<Bar>'
someObject.myMethod.apply(someOtherObject, ['<', '>']); // alerts '<Bar>'
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
var someObject = {
 
myProperty : 'Foo',
 
myMethod : function(prefix, postfix) {
 
alert(prefix + this.myProperty + postfix);
 
}
 
};
 
someObject.myMethod('<', '>'); // alerts '<Foo>'
 
var someOtherObject  = {
 
myProperty : 'Bar'
 
};
 
someObject.myMethod.call(someOtherObject, '<', '>'); // alerts '<Bar>'
 
someObject.myMethod.apply(someOtherObject, ['<', '>']); // alerts '<Bar>'
64. Define event bubbling?

JavaScript allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.

65. Is JavaScript case sensitive? Give an example?

Yes, JavaScript is case sensitive. For example, a function parseInt is not same as the function Parseint.

66. What boolean operators can be used in JavaScript?

The ‘And’ Operator (&&), ‘Or’  Operator (||) and the ‘Not’ Operator (!) can be used in JavaScript.

*Operators are without the parenthesis.

67. How can a particular frame be targeted, from a hyperlink, in JavaScript?

This can be done by including the name of the required frame in the hyperlink using the ‘target’ attribute.


<a href=”newpage.htm” target=”newframe”>>New Page</a>
1
<a href=”newpage.htm” target=”newframe”>>New Page</a>
68. What is the role of break and continue statements?

Break statement is used to come out of the current loop while the continue statement continues the current loop with a new recurrence.

69. Write the point of difference between web-garden and a web-farm?

Both web-garden and web-farm are web hosting systems. The only difference is that web-garden is a setup that includes many processors in a single server while web-farm is a larger setup that uses more than one server.

70. How are object properties assigned?

Assigning properties to objects is done in the same way as a value is assigned to a variable. For example, a form object’s action value is assigned as ‘submit’ in the following manner – Document.form.action=”submit”

71. What is the method for reading and writing a file in JavaScript?

This can be done by Using JavaScript extensions (runs from JavaScript Editor), example for opening of a file –


fh = fopen(getScriptPath(), 0);
1
fh = fopen(getScriptPath(), 0);
72. How are DOM utilized in JavaScript?

DOM stands for Document Object Model and is responsible for how various objects in a document interact with each other. DOM is required for developing web pages, which includes objects like paragraph, links, etc. These objects can be operated to include actions like add or delete. DOM is also required to add extra capabilities to a web page. On top of that, the use of API gives an advantage over other existing models.

73. How are event handlers utilized in JavaScript?

Events are the actions that result from activities, such as clicking a link or filling a form, by the user. An event handler is required to manage proper execution of all these events. Event handlers are an extra attribute of the object. This attribute includes event’s name and the action taken if the event takes place.

74. Explain the role of deferred scripts in JavaScript?

By default, the parsing of the HTML code, during page loading, is paused until the script has not stopped executing. It means, if the server is slow or the script is particularly heavy, then the webpage is displayed with a delay. While using Deferred, scripts delays execution of the script till the time HTML parser is running. This reduces the loading time of web pages and they get displayed faster.

75. What are the various functional components in JavaScript?

The different functional components in JavaScript are-

First-class functions: Functions in JavaScript are utilized as first class objects. This usually means that these functions can be passed as arguments to other functions, returned as values from other functions, assigned to variables or can also be stored in data structures.

Nested functions: The functions, which are defined inside other functions, are called Nested functions. They are called ‘everytime’ the main function is invoked.

76. Write about the errors shown in JavaScript?

JavaScript gives a message if it encounters an error. The recognized errors are –

Load-time errors: The errors shown at the time of the page loading are counted under Load-time errors. These errors are encountered by the use of improper syntax, and thus are detected while the page is getting loaded.
Run-time errors: This is the error that comes up while the program is running. It is caused by illegal operations, for example, division of a number by zero, or trying to access a non-existent area of the memory.
Logic errors: It is caused by the use of syntactically correct code, which does not fulfill the required task. For example, an infinite loop.
77. What are Screen objects?

Screen objects are used to read the information from the client’s screen. The properties of screen objects are –

AvailHeight: Gives the height of client’s screen
AvailWidth: Gives the width of client’s screen.
ColorDepth: Gives the bit depth of images on the client’s screen
Height: Gives the total height of the client’s screen, including the taskbar
Width: Gives the total width of the client’s screen, including the taskbar
78. Explain the unshift() method ?

This method is functional at the starting of the array, unlike the push(). It adds the desired number of elements to the top of an array. For example –


var name = [ "john" ];
name.unshift( "charlie" );
name.unshift( "joseph", "Jane" );
console.log(name);
1
2
3
4
5
6
7
var name = [ "john" ];
 
name.unshift( "charlie" );
 
name.unshift( "joseph", "Jane" );
 
console.log(name);
The output is shown below:


[" joseph "," Jane ", " charlie ", " john "]
1
[" joseph "," Jane ", " charlie ", " john "]
79. Define unescape() and escape() functions?

The escape () function is responsible for coding a string so as to make the transfer of the information from one computer to the other, across a network.

For Example:


<script>
document.write(escape(“Hello? How are you!”));
</script>
1
2
3
4
5
<script>
 
document.write(escape(“Hello? How are you!”));
 
</script>
Output: Hello%3F%20How%20are%20you%21

The unescape() function is very important as it decodes the coded string.

It works in the following way. For example:


<script>
document.write(unescape(“Hello%3F%20How%20are%20you%21”));
</script>
1
2
3
4
5
<script>
 
document.write(unescape(“Hello%3F%20How%20are%20you%21”));
 
</script>
Output: Hello? How are you!

80. What are the decodeURI() and encodeURI()?

EncodeURl() is used to convert URL into their hex coding. And DecodeURI() is used to convert the encoded URL back to normal.


<script>
var uri="my test.asp?name=ståle&car=saab";
document.write(encodeURI(uri)+ "<br>");
document.write(decodeURI(uri));
</script>
1
2
3
4
5
6
7
8
9
<script>
 
var uri="my test.asp?name=ståle&car=saab";
 
document.write(encodeURI(uri)+ "<br>");
 
document.write(decodeURI(uri));
 
</script>
Output –

my%20test.asp?name=st%C3%A5le&car=saab

my test.asp?name=ståle&car=saab

 81. Why it is not advised to use innerHTML in JavaScript?

innerHTML content is refreshed every time and thus is slower. There is no scope for validation in innerHTML and, therefore, it is easier to insert rouge code in the document and, thus, make the web page unstable.

82. What does the following statement declares?


var myArray = [[[]]];
1
var myArray = [[[]]];
It declares a three dimensional array.

83. How are JavaScript and ECMA Script related?

ECMA Script are like rules and guideline while Javascript is a scripting language used for web development.

84. What is namespacing in JavaScript and how is it used?

Namespacing is used for grouping the desired functions, variables etc. under a unique name. It is a name that has been attached to the desired functions, objects and properties. This improves modularity in the coding and enables code reuse.

85. How can JavaScript codes be hidden from old browsers that don’t support JavaScript?

For hiding JavaScript codes from old browsers:

Add “<!–” without the quotes in the code just after the <script> tag.

Add “//–>” without the quotes in the code just before the <script> tag.

Old browsers will now treat this JavaScript code as a long HTML comment. While, a browser that supports JavaScript, will take the “<!–” and “//–>” as one-line comments.

