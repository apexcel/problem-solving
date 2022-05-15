const [n, data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const counter = Array(2001).fill(1001);
data.split(' ').forEach(d => {
    const k = +d;
    counter[k < 0 ? 1000 - Math.abs(k) : k + 1000] = k;
});
console.log(counter.filter(v => v !== 1001).join(' '));