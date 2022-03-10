const [info, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
let mx = -1;

const nums = arr.map(a => {
    if (+a > mx) mx = +a;
    return +a;
});

let lo = 1, hi = mx, mid;
let res = 0;

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    const s = nums.reduce((sum, cur) => sum += Math.floor(cur / mid), 0);

    if (s >= k) {
        lo = mid + 1;
        res = mid;
    }
    else hi = mid - 1;
}
console.log(res);