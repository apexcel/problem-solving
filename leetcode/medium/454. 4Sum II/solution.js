/** https://leetcode.com/problems/4sum-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
function fourSumCount(nums1, nums2, nums3, nums4) {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < nums1.length; i += 1) {
        for (let j = 0; j < nums2.length; j += 1) {
            const sum = nums1[i] + nums2[j];
            map.set(sum, map.get(sum) + 1 || 1);
        }
    }

    for (let i = 0; i < nums3.length; i += 1) {
        for (let j = 0; j < nums4.length; j += 1) {
            const sum = nums3[i] + nums4[j];
            count += map.get(-sum) || 0;
        }
    }

    return count;
};