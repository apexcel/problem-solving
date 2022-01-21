const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [0, 1];
for (let i = 2; i <= n; i += 1) {
    let mn = 987654321;
    for (let j = 1; j * j <= i; j += 1) {
        const p = i - (j * j);
        mn = Math.min(mn, dp[p]);
    }
    dp[i] = mn + 1;
}
console.log(dp[n]);
