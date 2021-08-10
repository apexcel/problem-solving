/** https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    return nums.length !== new Set(nums).size;
};