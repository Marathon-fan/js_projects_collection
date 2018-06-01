# javascript datastructure

## introduction  
use javascript to implement datastructure  
1 Arrays  
2 dictionaries  
3 set  
4 hashing  

## JS 
simpleHash


## JS syntax  
### 1 this keyword  

A function's this keyword behaves a little differently in JavaScript compared to other languages. 

Note the use of the pronoun “he.” We could have written this: “John is running fast because John is trying to catch the train.” We don’t reuse “John” in this manner, for if we do, our family, friends, and colleagues would abandon us. Yes, they would. Well, maybe not your family, but those of us with fair-weather friends and colleagues. In a similar graceful manner, in JavaScript, we use the this keyword as a shortcut, a referent; it refers to an object; that is, the subject in context, or the subject of the executing code. Consider this example:

```javascript
    var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        ​// Notice we use "this" just as we used "he" in the example sentence earlier?:​
        console.log(this.firstName + " " + this.lastName);
    ​// We could have also written this:​​
        console.log(person.firstName + " " + person.lastName);
    }
}
```
It also has some differences between strict mode and non-strict mode.


And consider this basic jQuery example with of this:
```javascript

    // A very common piece of jQuery code​
​
    $ ("button").click (function (event) {
    // $(this) will have the value of the button ($("button")) object​
​// because the button object invokes the click () method​
    console.log ($ (this).prop ("name"));
    });
```

I shall expound on the preceding jQuery example: The use of $(this), which is jQuery’s syntax for the this keyword in JavaScript, is used inside an anonymous function, and the anonymous function is executed in the button’s click () method. The reason $(this) is bound to the button object is because the jQuery library binds $(this) to the object that invokes the click method. Therefore, $(this) will have the value of the jQuery button ($(“button”)) object, even though $(this) is defined inside an anonymous function that cannot itself access the “this” variable on the outer function.

If you understand this one principle of JavaScript’s this, you will understand the “this” keyword with clarity: this is not assigned a value until an object invokes the function where this is defined. Let’s call the function where this is defined the “this Function.”


### 2 prototype  
Every JavaScript object has a prototype. The prototype is also an object.

All JavaScript objects inherit their properties and methods from their prototype.

```javascript
function BST(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

BST.prototype.insert = function(value) {
	if (value <= this.value) {
		if (!this.left) {
			this.left = new BST(value);
		} else {
			this.left.insert(value);
		}
		return;
	}
	if (!this.right) {
		this.right = new BST(value);
	} else {
		this.right.insert(value);
	}
}
```

### 3 javascript push  

The push() method adds new items to the end of an array, and returns the new length.


```javascript
//Add a new item to an array:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
//The result of fruits will be:

Banana,Orange,Apple,Mango,Kiwi
```

Syntax  

array.push(item1, item2, ..., itemX)  

Parameter	Description  
item1, item2, ..., itemX	Required. The item(s) to add to the array  


## REFERENCE   

https://reinteractive.com/posts/235-es6-classes-and-javascript-prototypes