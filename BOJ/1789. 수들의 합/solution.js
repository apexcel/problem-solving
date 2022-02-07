let n = +require('fs').readFileSync('/dev/stdin').toString();
let k = 0, i = 1, cnt = 0;
while (k + i <= n) {
    k += i;
    i += 1;
    cnt += 1;
}
console.log(cnt);