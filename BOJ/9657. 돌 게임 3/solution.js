const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [true, true, false, true, true];

for (let i = 5; i <= n; i += 1) {
    dp[i] = false;
    if (dp[i - 4] === false || dp[i - 3] === false || dp[i - 1] === false) dp[i] = true;
}

console.log(dp[n] ? 'SK' : 'CY');