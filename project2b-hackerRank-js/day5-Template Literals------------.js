//https://www.hackerrank.com/challenges/js10-template-literals/problem



/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {

	let A = expressions[0];
    let P = expressions[1];
    let aux = Math.sqrt(P * P - 16 * A);
    var res = [];
    res.push((P - aux) / 4);
    res.push((P + aux) / 4);
    return res;     
}




