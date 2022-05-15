const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const gaps = [];

const gcd = (a, b) => !(a % b) ? b : gcd(b, a % b);

data.sort((a, b) => a - b);
for (let i = 1; i < data.length; i += 1) {
    gaps[i - 1] = data[i] - data[i - 1];
}

let g = gaps[0];
for (let i = 1; i < gaps.length; i += 1) {
    g = gcd(g, gaps[i]);
}

console.log(gaps.reduce((sum, gap) => sum += Math.floor(gap / g) - 1, 0));