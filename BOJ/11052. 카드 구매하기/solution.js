const [n, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const p = nums.split(' ').map(Number);

const dp = [0, p[0]];
for (let i = 2; i <= n; i += 1) {
    const half = Math.floor(i / 2);
    dp[i] = p[i - 1];

    for (let j = 1; j <= half; j += 1) {
        dp[i] = Math.max(dp[i], dp[j] + dp[i - j])
    }
}
console.log(dp[n]);