// https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    return binSearch(nums, target, 0, nums.length - 1);
};

function binSearch(arr, target, lo, hi, m) {
    if (lo > hi) return lo;

    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    return arr[mid] > target
        ? binSearch(arr, target, lo, mid - 1, mid)
        : binSearch(arr, target, mid + 1, hi, mid)
}

// searchInsert([1, 3, 5, 6], 5)
searchInsert([1, 3, 5, 6], 2)
searchInsert([1, 3, 5, 6], 7)
searchInsert([1, 3, 5, 6], 0)