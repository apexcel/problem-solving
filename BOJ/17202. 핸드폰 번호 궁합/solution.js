const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let c = '', d = [];
for (let i = 0; i < a.length; i += 1) c += a[i] + b[i];

while (c.length > 2) {
    for (let i = 1; i < c.length; i += 1) {
        d[i] = (+c[i - 1] + +c[i]) % 10;
    }
    c = d.join('');
    d = [];
}
console.log(c);