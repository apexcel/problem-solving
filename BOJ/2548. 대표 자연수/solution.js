const [n, data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = data.split(' ').map(Number).sort((a, b) => a - b);
console.log(nums[Math.floor((n - 1) / 2)]);