const dp = Array(101).fill(0);
const tiling = n => {
    if (n <= 1) return 1;
    if (dp[n]) return dp[n];
    return dp[n] = (tiling(n - 2) + tiling(n - 1)) % 1000000007;
};