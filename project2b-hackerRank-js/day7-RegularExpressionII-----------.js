// https://www.hackerrank.com/challenges/js10-regexp-2/problem


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-z|A-Z]+$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const re =regexVar();
console.log(re.test('Mr.J'));

//const re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-z|A-Z]+$/
// /^(Mr |Mrs |Ms |Dr |Er )\.[a-z|A-Z]+$/ is wrong answer