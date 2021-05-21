// https://leetcode.com/problems/arithmetic-subarrays/
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
function checkArithmeticSubarrays(nums, l, r) {
    const canRearrange = (subArr) => {
        subArr.sort((a, b) => a - b);
        const diff = subArr[1] - subArr[0];
        for (let i = 0; i < subArr.length - 1; i += 1) {
            if (subArr[i + 1] - subArr[i] !== diff) return false;
        }
        return true;
    }

    return l.map((_, i) => canRearrange(nums.slice(l[i], r[i] + 1)));
}

// checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])
console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]))