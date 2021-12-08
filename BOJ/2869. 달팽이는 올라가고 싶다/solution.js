const [a, b, v] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(Math.ceil((v - a) / (a - b)) + 1);