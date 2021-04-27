// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for (let i = 1; i <= arr.length; i += 2) {
        for (let j = 0; j + i <= arr.length; j += 1) {
            sum += arr.slice(j, j+i).reduce((acc, cur) => acc + cur);
        }
    }
    console.log(sum)
    return sum;
};

sumOddLengthSubarrays([1, 4, 2, 5, 3])