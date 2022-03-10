const [info, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n] = info.split(' ').map(Number);

let lo = 1, hi = -1, mid;
let res = 0;

const arr = nums.split(' ').map(num => {
    if (+num > hi) hi = +num;
    return +num;
});

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    const s = arr.reduce((sum, cur) => sum += Math.floor(cur / mid), 0);
    if (s >= m) {
        res = mid;
        lo = mid + 1;
    }
    else {
        hi = mid - 1;
    }
}
console.log(res);
