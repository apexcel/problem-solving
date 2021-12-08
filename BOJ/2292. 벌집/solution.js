const n = +require('fs').readFileSync('/dev/stdin').toString();
let x = 1, cnt = 1;
while (x < n) x += 6 * (cnt++);
console.log(cnt);