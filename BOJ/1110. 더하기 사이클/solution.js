const n = +require('fs').readFileSync('/dev/stdin').toString();
let res = n, cnt = 0;

do {
    const sum = Math.floor(res / 10) + (res % 10);
    res = ((res % 10) * 10) + (sum % 10);
    cnt += 1;
} while (res !== n);
console.log(cnt);