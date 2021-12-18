const [h, y] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let mx = -1;

const calc = (year, prev) => {
    if (year <= 0) {
        mx = Math.max(mx, prev);
        return;
    }

    if (year >= 5) calc(year - 5, Math.floor(prev * 1.35));
    if (year >= 3) calc(year - 3, Math.floor(prev * 1.2));
    calc(year - 1, Math.floor(prev * 1.05));
}

calc(+y, +h);
console.log(mx);