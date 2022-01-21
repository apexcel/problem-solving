const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [1n, 1n];
const mul = x => {
    let ret = 0n;
    for (let i = 0, j = 1; i < x && j <= x; i += 1, j += 1) {
        ret += dp[i] * dp[dp.length - j];
    }
    return ret;
};

for (let i = 2; i <= n; i += 1) {
    const v = i >> 1;
    dp[i] = 2n * mul(v);
    if (i % 2) dp[i] += dp[v] * dp[v];
}

console.log(dp[n].toString());
