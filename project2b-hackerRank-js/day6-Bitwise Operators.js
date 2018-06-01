//https://www.hackerrank.com/challenges/js10-bitwise/problem



/*
*	Return the largest value of any a & b < k in S (where a < b).
* 	
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
	let res = 0;
	for (let i = 1; i < n; i++) {
		for (let j = i + 1; j <= n; j++) {
			let tmp = i & j;
			if (tmp < k) {
				res = Math.max(tmp, res);
			} 
		}
	}
	return res;
    
}

