const n = parseInt(require('fs').readFileSync('/dev/stdin').toString(), 10);
const sums = [0];

for (let i = 1; i <= n; i += 1) {
    sums[i] = sums[i - 1] + i;
}

console.log(sums[n]);