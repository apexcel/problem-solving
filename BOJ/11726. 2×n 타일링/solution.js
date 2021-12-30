const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = Array(1001).fill(0);
const tiling = n => {
    if (n <= 1) return 1;
    if (dp[n]) return dp[n];
    return dp[n] = (tiling(n - 2) + tiling(n - 1)) % 10007;
};
console.log(tiling(n));