const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let nums = input.map(el => el.split(' '));
let ans = '';
let i = 0;
while (true) {
    let sum = Number(nums[i][0]) + Number(nums[i][1]);
    if (sum === 0 || isNaN(sum)) {
        break;
    }
    ans += sum + '\n';
    i += 1;
}
console.log(ans);