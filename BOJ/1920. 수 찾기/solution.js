const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const m = +input[0], n = +input[2];
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);
const targets = input[3].split(' ').map(Number);

const bs = target => {
    let lo = 0, hi = m - 1, mid;

    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        if (target === nums[mid]) return mid;
        else if (target > nums[mid]) lo = mid + 1
        else hi = mid - 1;
    }
    return -1;
};

let res = '';
for (let i = 0; i < n; i += 1) {
    res += (bs(targets[i]) > -1 ? 1 : 0) + '\n';
}
console.log(res);