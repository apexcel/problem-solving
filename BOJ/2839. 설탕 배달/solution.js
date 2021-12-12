let n = +require('fs').readFileSync('/dev/stdin').toString(), cnt = 0;
while (n % 5) {
    n -= 3;
    cnt += 1;
}
console.log(n < 0 ? -1 : cnt + (n / 5));