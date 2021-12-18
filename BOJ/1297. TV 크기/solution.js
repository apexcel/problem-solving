const [c, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const x = Math.sqrt((c * c) / (a * a + b * b));
console.log(Math.floor(a * x), Math.floor(b * x));