const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let nums = [];

for (let i = 1; i <= input[0]; i += 1) {
    nums.push(input[i].split(' '));
}

for (let i = 0; i < input[0]; i += 1) {
    console.log(Number(nums[i][0]) + Number(nums[i][1]));
}