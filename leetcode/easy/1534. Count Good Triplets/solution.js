// https://leetcode.com/problems/count-good-triplets/
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function countGoodTriplets(arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (Math.abs(arr[i] - arr[j]) > a) continue;
            for (let k = j + 1; k < arr.length; k += 1) {
                if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) count += 1;
            }
        }
    }
    return count;
};

countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)
countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)