const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const a = input[1].split(' ').map(Number).sort((a, b) => a - b);
const b = input[2].split(' ').map(Number).sort((a, b) => b - a);
let res = 0;
for (let i = 0; i < a.length; i += 1) {
    res += a[i] * b[i];
}
console.log(res);