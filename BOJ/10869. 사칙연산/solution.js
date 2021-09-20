// https://www.acmicpc.net/problem/10869
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v, 10));
console.log(`${a + b}\n${a - b}\n${a * b}\n${~~(a / b)}\n${a % b}`);