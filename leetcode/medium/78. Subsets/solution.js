// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const powerset = [];
    const makePowerSet = (path, index) => {
        powerset.push(path);
        for (let i = index; i < nums.length; i += 1) {
            makePowerSet([...path, nums[i]], i + 1);
        }
    };

    makePowerSet([], 0);
    return powerset;
};

subsets([1, 2, 3])