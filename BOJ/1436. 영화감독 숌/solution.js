const n = +require('fs').readFileSync('/dev/stdin').toString();
for (let i = 1, x = 666; i <= n; x += 1) {
    let quot = x, cnt = 0;
    while (quot > 0) {
        cnt = quot % 10 === 6 ? cnt + 1 : 0;
        quot = Math.floor(quot / 10);
        if (cnt >= 3) {
            if (n === i) console.log(x);
            i += 1;
            break;
        }
    }
}