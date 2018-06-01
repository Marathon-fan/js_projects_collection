
// https://www.hackerrank.com/challenges/js10-regexp-3/problem

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
     const re = /\d+/g

     // g stands for group?
     // why here we don't need ^ and $ anymore
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const tmp = "102, 1948948 and 1.3 and 4.5";
const re = regexVar();
console.log(tmp.match(re));

const tmpAgain = "666.888xxx 34.342 234";
console.log(tmpAgain.match(re));
