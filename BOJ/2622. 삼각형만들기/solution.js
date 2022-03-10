const n = +require('fs').readFileSync('/dev/stdin').toString();
let cnt = 0;
for (let c = 1; c <= n; c += 1) {
    if (n <= 3 * c && 2 * c < n) cnt += c - Math.floor((n - c - 1) / 2);
}
console.log(cnt)