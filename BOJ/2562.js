const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(Boolean);
const nums = input.map(el => parseInt(el));
let max = nums[0];
let pos = 0;
for (let i = 0; i < nums.length; i += 1) {
    if (max < nums[i]) {
        max = nums[i];
        pos = i;
    }
}
console.log(max);
console.log(pos + 1);