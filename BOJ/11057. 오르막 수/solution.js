const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < n; i += 1) {
    for (let j = 1; j < 10; j += 1) {
        dp[j] = (dp[j] % 10007) + (dp[j - 1] % 10007);
    }
}
console.log(dp[9] % 10007);