// https://leetcode.com/problems/third-maximum-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    const set = new Set(nums.sort((a, b) => b - a));
    const arr = Array.from(set);
    return arr.length < 3 ? arr[0] : arr[2];
};

thirdMax([1, 2])
// thirdMax([1, 2, 7, 34, 78, 9, 8, 8, 23, 55])
// thirdMax([2, 2, 3, 1])