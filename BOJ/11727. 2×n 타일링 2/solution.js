const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [];
const tiling = k => {
    if (k <= 1) return 1;
    if (dp[k]) return dp[k];
    return dp[k] = (2 * tiling(k - 2) + tiling(k - 1)) % 10007;
};
console.log(tiling(n));