const [n, ...ropes] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const r = ropes.map(Number).sort((a, b) => b - a);
let mx = r[0];

for (let i = 1; i < r.length; i += 1) {
    const p = r[i] * (i + 1);
    if (mx < p) mx = p;
}

console.log(mx);