
//https://www.hackerrank.com/challenges/js10-let-and-const/problem/


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const r = 3.2;
        
    let area;
    // Print the area of the circle:
    area = PI * r * r;
    console.log(area);
    
    let perimeter;
    // Print the perimeter of the circle:
    perimeter = 2 * PI * r;
    console.log(perimeter);
  }

    const PI = Math.PI;
    const r = readLine();
        
    let area;
    // Print the area of the circle:
    area = PI * r * r;
    console.log(area);
    
    let perimeter;
    // Print the perimeter of the circle:
    perimeter = 2 * PI * r;
    console.log(perimeter);