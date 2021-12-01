const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = input[1].split(' ');
let mn = 987654321, mx = -987654321;
for (let i = 0; i < nums.length; i += 1) {
    if (mn > +nums[i]) mn = +nums[i];
    if (mx < +nums[i]) mx = +nums[i];
}
console.log(mn, mx);