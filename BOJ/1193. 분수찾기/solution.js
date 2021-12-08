const n = +require('fs').readFileSync('/dev/stdin').toString();
let mx = 0, idx = 0;
while (mx < n) {
    idx += 1;
    mx += idx;
}

const offset = mx - n, a = offset + 1, b = idx - offset;
console.log(idx % 2 ? `${a}/${b}` : `${b}/${a}`);