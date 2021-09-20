// https://www.acmicpc.net/problem/10430
const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v, 10));
console.log(`${(a + b) % c}\n${(a + b) % c}\n${(a * b) % c}\n${(a * b) % c}`);