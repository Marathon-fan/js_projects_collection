//https://www.hackerrank.com/challenges/js10-objects/problem

/*
 * Complete the Rectangle function
 */

class Rect {
	constructor(a, b) {
		this.length = a;
		this.width = b;
		this.perimeter = 2 * (a + b);
		this.area = a * b;
	}
}

function Rectangle(a, b) {
    return new Rect(a, b);
}

