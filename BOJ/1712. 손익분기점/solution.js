const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);
console.log(c <= b ? -1 : Math.floor(a / (c - b)) + 1);