const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const nums = input[1].split(' ').map(n => +n).sort((a, b) => a - b);
console.log(nums[0] * nums[nums.length - 1]);
