const [n, arr, budget] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let lo = 1, hi = 0, mid;
let res = 0;

const nums = arr.split(' ').map(a => {
    if (+a > hi) hi = +a;
    return +a;
});

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    const s = nums.reduce((sum, cur) => sum += Math.min(mid, cur), 0);

    if (s <= budget) {
        res = mid;
        lo = mid + 1;
    }
    else {
        hi = mid - 1;
    }
}

console.log(res);