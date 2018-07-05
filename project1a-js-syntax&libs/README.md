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

## libs   

### loadsh    

https://lodash.com/docs/
```
_.isEmpty(value)
source npm package

Checks if value is an empty object, collection, map, or set.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.
```

### winston    

winston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each winston logger can have multiple transports (see: Transports) configured at different levels (see: Logging levels). For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file.





