// https://www.acmicpc.net/problem/9498
const s = +require('fs').readFileSync('/dev/stdin').toString();
console.log(s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : s >= 60 ? 'D' : 'F');