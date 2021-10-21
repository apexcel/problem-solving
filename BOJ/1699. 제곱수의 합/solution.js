const n = parseInt(require('fs').readFileSync('/dev/stdin').toString(), 10);
const dp = Array(n + 1).fill(0);

for (let i = 1; i <= n; i += 1) {
    dp[i] = i;
    for (let j = 1; j ** 2 <= i; j += 1) {
        dp[i] = Math.min(dp[i], dp[i - (j ** 2)] + 1);
    }
}

console.log(dp[n]);
