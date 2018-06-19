# javascript

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