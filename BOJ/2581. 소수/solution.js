const [m, n] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const p = Array(n + 1).fill(1);
p[0] = p[1] = 0;

for (let i = 2; i * i <= n; i += 1) {
    if (!p[i]) continue;
    for (let j = i + i; j <= n; j += i) p[j] = 0;
}

let sum = 0, mn = 987654321;
for (let i = m; i <= n; i += 1) {
    if (p[i] > 0) {
        if (i > 1 && mn > i) mn = i;
        sum += i;
    }
}
console.log(mn === 987654321 ? -1 : `${sum}\n${mn}`);