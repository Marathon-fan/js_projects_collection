//https://www.hackerrank.com/challenges/js10-throw/problem



/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {

    try {
        if (a > 0) {            
            return 'YES';
        }
        if (a == 0) {
            throw new Error("Zero Error");
        } else if (a < 0) {
            throw new Error("Negative Error");
        }
    } catch (e) {
        throw e;
    } 
    
}


// The throw Statement
// The throw statement allows you to create a custom error.

// Technically you can throw an exception (throw an error).

// The exception can be a JavaScript String, a Number, a Boolean or an Object:

// throw "Too big";    // throw a text
// throw 500;          // throw a number