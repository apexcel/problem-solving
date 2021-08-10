/** https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    // const res = [];
    // for (let i = 0; i < nums2.length; i += 1) {
    //     const idx = nums1.findIndex(n => n === nums2[i]);
    //     if (idx > -1) {
    //         res.push(nums2[i]);
    //         nums1[idx] = -1;
    //     }
    // }
    // return res;
    let res = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    for (let i = 0, j = 0; i < nums1.length && j < nums2.length;) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i += 1;
            j += 1;
        }
        else if (nums1[i] > nums2[j]) {
            j += 1;
        }
        else {
            i += 1;
        }
    }
    console.log(res)
    return res;
};

intersect([1, 2, 2, 1], [2])