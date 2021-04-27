// const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const n = parseInt(sc[0], 10),
//       nums = sc.slice(1).map(v => v.trim().split(' ').map(e => parseInt(e, 10)));

// console.log(sc)
// console.log(n, nums)

const nums = [
    [7],
    [3, 8],
    [8, 1, 0],
    [2, 7, 4, 4],
    [4, 5, 2, 6, 5],
];

let n = 5

for (let i = 1; i < n; i += 1) {
    const len = nums[i].length;
    nums[i] = nums[i].map((v, j) => {
        if (j === 0) {
            return v + nums[i-1][j];
        }
        else if (j === len - 1) {
            return v + nums[i-1][len - 2];
        }
        else {
            const m = Math.max(nums[i-1][j-1], nums[i-1][j]);
            return v + m;
        }
    })
}
console.log(nums)

// for (let i = 1; i < n; i += 1) {
//     const len = nums[i].length;
//     for (let j = 0; j < len; j += 1) {
//         if (j === 0) {
//             nums[i][j] += nums[i-1][j]
//         }
//         else if (j === len-1) {
//             nums[i][j] += nums[i-1][nums[i-1].length - 1]
//         }
//         else {
//             const m = Math.max(nums[i-1][j-1], nums[i-1][j]);
//             nums[i][j] += m
//         }
//     }
// }
console.log(Math.max(...nums[nums.length - 1]))