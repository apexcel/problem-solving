// https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const permuts = [];
    const isVisit = Array(nums.length).fill(false);
    let temp = [];

    const pick = (depth) => {
        if (temp.length === depth) {
            permuts.push(Array.from(temp));
            return;
        }

        for (let i = 0; i < depth; i += 1) {
            if (!isVisit[i]) {
                isVisit[i] = true;
                temp.push(nums[i]);
                pick(depth);
                temp.pop();
                isVisit[i] = false;
            }
        }
    };

    pick(nums.length);
    return permuts;
};

permute([1,2,3])