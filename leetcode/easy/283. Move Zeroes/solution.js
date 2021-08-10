/** https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    for (let i = 0, j = 0; i < nums.length && j < nums.length; i += 1) {
        if (nums[j] !== 0) {
            j += 1;
        }
        if (i > j) {
            nums[j] = nums[i];
            nums[i] = 0;
        }
    }
    // for (let i = nums.length - 1; i >= 0; i -= 1) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1);
    //         nums.push(0);
    //     }
    // }
};