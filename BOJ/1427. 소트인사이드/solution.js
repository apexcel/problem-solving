const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const radix = Array(10).fill(0);
let res = '';
Array.prototype.forEach.call(input, v => radix[v] += 1);
for (let i = 9; i >= 0; i -= 1) {
    for (let j = 0; j < radix[i]; j += 1) res += i;
}
console.log(res);