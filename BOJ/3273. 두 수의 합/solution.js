const [n, k, t] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const TARGET = +t;
const SIZE = +n;
const nums = k.split(' ').map(Number).sort((a, b) => a - b);
let cnt = 0;

const lowerBound = diff => {
    let lo = 0, hi = SIZE - 1, mid;
    while (lo <= hi) {
        mid = (lo + hi) >> 1;
        if (nums[mid] === diff) {
            cnt += 1;
            return;
        }
        nums[mid] > diff ? hi = mid - 1 : lo = mid + 1;
    }
}

for (let num of nums) {
    if (2 * num >= TARGET) break;
    lowerBound(TARGET - num);
}

console.log(cnt);