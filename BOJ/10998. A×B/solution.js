// https://www.acmicpc.net/problem/10998
console.log(require('fs').readFileSync('/dev/stdin').toString().split(' ').reduce((prev, cur) => prev * cur));