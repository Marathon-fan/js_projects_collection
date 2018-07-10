// https://www.hackerrank.com/challenges/js10-regexp-1/problem

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).*\1$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}


```
.* will match 0 or more of any character.
\1 is a reference to the first capture group (denoted by parentheses). 
```

//aewxyzae

// var f = regexVar();
// console.log(f.test('aewxyzae'));

// the following answer is wrong: /([aeiou]).*\1/