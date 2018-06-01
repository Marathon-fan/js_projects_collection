//https://www.hackerrank.com/challenges/js10-arrays/problem


/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    //console.log(max);
    let res = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < max) {
            if (nums[i] > res) {
                res = nums[i];
            }
        }
    }
    if (res == -1) {
        res = max;
    }
    return res;
    
}
