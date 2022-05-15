const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
let res = 1n;
for (let i = n, j = 1n; i > n - k; i -= 1n, j += 1n) {
    res = (res * i / j);
}
console.log(res % 10007n);