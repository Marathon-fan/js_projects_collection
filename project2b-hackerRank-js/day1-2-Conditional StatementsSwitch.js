//https://www.hackerrank.com/challenges/js10-switch/problem

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s.charAt(0)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':       
        case 'u': letter = 'A'; break;
        //b, c, d, f, g
        case 'b':
        case 'c':
        case 'd':
        case 'f':       
        case 'g': letter = 'B'; break;      
        //h, j, k, l, m
        case 'h':
        case 'j':
        case 'k':
        case 'l':       
        case 'm': letter = 'C'; break;  
        //h, j, k, l, m
        default : letter = 'D'; break;          
    }
    
    return letter;
}