const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const nums = input[1].split(' ').map(el => parseInt(el));
const best = nums.reduce((acc, cur) => Math.max(acc, cur));
console.log(nums.map(el => el / best * 100).reduce((acc, cur) => (acc + cur)) / nums.length);