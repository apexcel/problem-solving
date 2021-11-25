const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = input[1].split(' ');
const sum = [+nums[0]];
let str = '';

for (let i = 1; i < nums.length; i += 1) {
    sum[i] = sum[i - 1] + +nums[i];
}

for (let i = 2; i < input.length; i += 1) {
    const [x, y] = input[i].split(' ');
    str += (x < 2 ? sum[y - 1] : sum[y - 1] - +sum[x - 2]) + '\n';
}

console.log(str);