const [m, n] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const p = Array(n + 1).fill(1);
p[0] = p[1] = 0;

for (let i = 2; i <= n; i += 1) {
    if (!p[i]) continue;
    for (let j = i + i; j <= n; j += i) p[j] = 0;
}

let res = '';
for (let i = m; i < p.length; i += 1) {
    if (p[i] > 0) res += i + '\n';
}
console.log(res);