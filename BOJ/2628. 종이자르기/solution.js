const [base, n, ...points] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [ex, ey] = base.split(' ').map(Number);

const x = [0, ex];
const y = [0, ey];

for (let i = 0; i < +n; i += 1) {
    const [type, pos] = points[i].split(' ').map(Number);
    type ? x.push(pos) : y.push(pos);
}

x.sort((a, b) => b - a);
y.sort((a, b) => b - a);

let mx = 0;
for (let i = 1; i < y.length; i += 1) {
    const h = y[i] - y[i - 1];
    for (let j = 1; j < x.length; j += 1) {
        const w = x[j] - x[j - 1];
        mx = Math.max(mx, h * w);
    }
}
console.log(mx);