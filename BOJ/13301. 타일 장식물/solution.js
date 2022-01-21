const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [[1n, 1n]];
for (let i = 1; i <= n; i += 1) {
    const p = dp[i - 1];
    dp[i] = i % 2 ? [p[0], p[0] + p[1]] : [p[0] + p[1], p[1]];
}
console.log((2n * (dp[n - 1][0] + dp[n - 1][1])).toString());
