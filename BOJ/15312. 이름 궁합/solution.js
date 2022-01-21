const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const e = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];
const get = ch => e[ch.charCodeAt(0) - 65];
let c = [], d = [];

for (let i = 0; i < a.length; i += 1) {
    c.push(get(a[i]));
    c.push(get(b[i]));
}

while (c.length > 2) {
    for (let i = 1; i < c.length; i += 1) d.push((c[i - 1] + c[i]) % 10);
    c = d.slice();
    d = [];
}
console.log(c.join(''));