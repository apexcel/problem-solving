const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = data.map(d => d.split(' ').map(Number));

let ratio = t[0][1], dir = t[0][2];
for (let i = 1; i < t.length; i += 1) {
    const [r1, r2, d] = t[i];
    if (d) dir ^= d;
    ratio = r2 * Math.floor(ratio / r1);
}
console.log(dir, ratio);