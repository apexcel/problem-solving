const [x, n] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let sum = 0;
for (let i = 0; i < x; i += 1) sum += (+n[i]);
console.log(sum);