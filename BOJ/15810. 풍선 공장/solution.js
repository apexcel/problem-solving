const [info, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [staffs, balloons] = info.split(' ').map(Number);
const efficiencies = nums.split(' ').map(Number);

let lo = 1, hi = 10e12, mid;
let cnt, res;

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    cnt = 0;
    for (let i = 0; i < efficiencies.length; i += 1) {
        cnt += Math.floor(mid / efficiencies[i]);
        if (cnt >= balloons) {
            hi = mid - 1;
            res = mid;
            break;
        }
    }

    if (cnt < balloons) {
        lo = mid + 1;
    }
}
console.log(res);
