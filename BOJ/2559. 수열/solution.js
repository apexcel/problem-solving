const [info, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
const arr = nums.split(' ');

let sum = arr.slice(0, k).reduce((acc, cur) => acc + +cur, 0);
let mx = sum;
for (let i = 0, j = k; j < n; i += 1, j += 1) {
    sum += (arr[j] - arr[i]);
    mx = mx < sum ? sum : mx;
}
console.log(mx);