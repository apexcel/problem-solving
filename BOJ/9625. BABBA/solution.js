const k = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [[1, 0]];
for (let i = 1; i <= k; i += 1) {
    const p = dp[i - 1];
    dp[i] = [p[1], p[0] + p[1]];
}
console.log(dp[k].join(' '));
