const [a, i] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(a * (i - 1) + 1);