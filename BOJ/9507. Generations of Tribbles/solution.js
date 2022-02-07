const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const dp = [1n, 1n, 2n, 4n]
const koong = n => {
    if (n < 2n) return 1n;
    if (dp[n]) return dp[n];
    return dp[n] = koong(n - 1n) + koong(n - 2n) + koong(n - 3n) + koong(n - 4n);
};

let res = '';
for (let i = 1; i <= +input[0]; i += 1) {
    res += koong(BigInt(input[i])) + '\n';
}
console.log(res);