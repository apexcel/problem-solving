// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    const sorted = nums.sort((a, b) => b - a);
    return (sorted[0] - 1) * (sorted[1] - 1);
};