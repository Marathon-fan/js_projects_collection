
//https://www.hackerrank.com/challenges/js10-arrows/problem


/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) {
	const res =  nums.map( s => {
		return s % 2 == 0 ? s * 2 : s * 3;
	});  
	return res;  
}


// function modifyArray(nums) {
// 	const res =  nums.map( s => {
// 		let t = 0;
// 		if (s % 2 == 0) {
// 			t = s * 2;
// 		} else {
// 			t = s * 3;
// 		}
// 		return t;
// 	});  
// 	return res;  
// }