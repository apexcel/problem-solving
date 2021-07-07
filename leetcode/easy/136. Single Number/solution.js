/** https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        res ^= nums[i];
    }
    return res;
};