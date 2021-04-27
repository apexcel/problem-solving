const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(Boolean);
const cases = parseInt(input[0]);
const nums = input[1].split(' ').map(el => parseInt(el));
let max = nums[0], min = nums[0];
for (let i = 0; i < cases; i += 1) {
    max < nums[i] ? max = nums[i] : max;
    min > nums[i] ? min = nums[i] : min;
}
console.log(min, max);