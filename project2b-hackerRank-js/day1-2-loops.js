//https://www.hackerrank.com/challenges/js10-loops/problem

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function isVowel(c) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        return true;
    }
    return false;

}

function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s.charAt(i))) {
            console.log(s.charAt(i));
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!isVowel(s.charAt(i))) {
            console.log(s.charAt(i));
        }
    }    
}