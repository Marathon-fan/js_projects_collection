//https://www.hackerrank.com/challenges/js10-class/problem


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

//https://www.hackerrank.com/challenges/js10-class/problem


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon{
    
    constructor(arr) {
        this.p = 0;     // this.p should be defined outside the for. or there will be error
        for (let i = 0; i < arr.length; i++) {
            this.p += arr[i];
        }
    }
    perimeter() {
        return this.p;
    }
}





