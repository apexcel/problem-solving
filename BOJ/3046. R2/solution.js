const [r1, s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log((2 * s) - r1);