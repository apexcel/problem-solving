// https://leetcode.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }

    const sorted = Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k);
    return sorted.map(v => v[0]);
};

topKFrequent([1,1,1,2,2,3], 2)