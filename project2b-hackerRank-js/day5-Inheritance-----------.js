//https://www.hackerrank.com/challenges/js10-inheritance/problem

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}


/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
	constructor(len) {
		super(len, len);

	}
}





// every function in JavaScript has something called a prototype property, which is empty by default. We can think of a function's prototype as an 
// object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to all instances of that function. This 
// is especially useful for inheritance (discussed below).

