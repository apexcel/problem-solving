const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dp = [parseFloat(input[1])];
let mx = dp[0];

for (let i = 2; i <= +input[0]; i += 1) {
    const cur = parseFloat(input[i]);
    dp[i - 1] = cur;
    if (cur > mx) mx = cur;
}

for (let i = 1; i < dp.length; i += 1) {
    dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
    mx = Math.max(mx, dp[i]);
}

console.log(mx.toFixed(3));
