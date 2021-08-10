/** https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let p1 = 0; p1 < nums.length; p1 += 1) {
        if (p1 > 0 && nums[p1] === nums[p1 - 1]) continue;
        if (nums[p1] > 0) break;

        let p2 = p1 + 1, p3 = nums.length - 1;
        while (p2 < p3) {
            const sum = nums[p1] + nums[p2] + nums[p3];
            if (sum === 0) {
                res.push([nums[p1], nums[p2], nums[p3]])
                p2 += 1;
                p3 -= 1;

                while (p2 < p3 && nums[p2] === nums[p2 - 1]) {
                    p2 += 1;
                }
            }
            else {
                sum > 0 ? p3 -= 1 : p2 += 1;
            }
        }
    }

    console.log(res)
    return res;
};

threeSum([-1, 0, 1, 2, -1, -4])
threeSum([-2, 0, 1, 1, 2])