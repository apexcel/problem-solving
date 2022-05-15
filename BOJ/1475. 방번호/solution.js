const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
const counter = Array(10).fill(0);

data.forEach(d => counter[d] += 1);
let sixnine = 0, mx = 0;
for (let i = 0; i < 10; i += 1) {
    if (i === 6 || i === 9) {
        sixnine += counter[i];
    }
    else {
        mx = Math.max(mx, counter[i]);
    }
}

console.log(Math.max(mx, Math.ceil(sixnine / 2)));