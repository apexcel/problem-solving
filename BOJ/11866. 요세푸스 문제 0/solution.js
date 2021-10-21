const [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
const q = Array(n).fill(0).map((_, i) => i + 1);
const res = [];
let i = 0;
while (q.length) {
    i = (i + k - 1) % q.length;
    res.push(q.splice(i, 1));
}
console.log(`<${res.join(', ')}>`);
