const k = +require('fs').readFileSync('/dev/stdin').toString();
const c = [500, 100, 50, 10, 5, 1];
let m = 1000 - k, cnt = 0, i = 0;

while (m > 0) {
    cnt += Math.floor(m / c[i]);
    m %= c[i];
    i += 1;
}

console.log(cnt);