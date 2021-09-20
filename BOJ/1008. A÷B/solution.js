// https://www.acmicpc.net/problem/1008
console.log(require('fs').readFileSync('/dev/stdin').toString().split(' ').reduce((prev, cur) => prev / cur));
