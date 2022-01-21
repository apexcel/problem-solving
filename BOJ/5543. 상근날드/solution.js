const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(Math.min(...input.slice(0, 3)) + Math.min(...input.slice(3)) - 50);