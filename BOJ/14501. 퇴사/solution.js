const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +(input.shift());
const dp = Array(n + 1).fill(0);
let mx = -1;
for (let i = 0; i < n; i += 1) {
    const [t, p] = input[i].trim().split(' ').map(Number);
    if (i + t <= n) dp[i + t] = Math.max(dp[i + t], dp[i] + p);
    dp[i + 1] = Math.max(dp[i + 1], dp[i]);
    mx = Math.max(mx, dp[i + 1]);
};
console.log(mx);