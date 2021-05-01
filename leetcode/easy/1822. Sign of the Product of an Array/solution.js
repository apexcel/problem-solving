// https://leetcode.com/problems/sign-of-the-product-of-an-array/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums) {
    const product = nums.reduce((acc, cur) => acc * cur, 1);
    return product > 0 ? 1 : product < 0 ? -1 : 0;
};