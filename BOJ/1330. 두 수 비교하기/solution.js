// https://www.acmicpc.net/problem/1330
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
console.log(a > b ? '>' : a < b ? '<' : '==');