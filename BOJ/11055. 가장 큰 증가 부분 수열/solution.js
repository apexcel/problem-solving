const [n, str] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const nums = str.split(' ').map(Number), dp = nums.slice();

let max = -1;
for (let i = 0; i < +n; i += 1) {
    for (let j = i + 1; j < +n; j += 1) {
        if (nums[i] < nums[j]) {
            dp[j] = Math.max(dp[i] + nums[j], dp[j]);
        }
    }
    if (max < dp[i]) max = dp[i];
}
console.log(max);