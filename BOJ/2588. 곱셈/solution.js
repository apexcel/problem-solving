// https://www.acmicpc.net/problem/2588
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => parseInt(v, 10));
console.log(`${a * (b % 10)}\n${a * (~~((b % 100) / 10))}\n${a * (~~(b / 100))}\n${a * b}`);