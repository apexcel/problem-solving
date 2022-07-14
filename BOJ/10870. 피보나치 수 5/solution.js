const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [0, 1, 1];
for (let i = 3; i <= 20; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[n]);