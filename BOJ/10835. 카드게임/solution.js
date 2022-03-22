const [n, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const size = +n;
const lstk = a.split(' ').map(Number), rstk = b.split(' ').map(Number);
const dp = Array.from(Array(size), () => Array(size).fill(-1));

const compare = (l, r) => {
    if (l >= n || r >= n) return 0;
    if (dp[l][r] !== -1) return dp[l][r];

    if (lstk[l] > rstk[r]) {
        dp[l][r] = compare(l, r + 1) + rstk[r];
    }
    else {
        dp[l][r] = Math.max(
            compare(l + 1, r),
            compare(l + 1, r + 1)
        );
    }
    return dp[l][r];
}
const res = compare(0, 0);
console.log(res);