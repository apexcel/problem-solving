const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, h] = input[0].split(' ').map(Number);
let mx = -1;
const nums = input[1].split(' ').map(v => {
    const ret = +v;
    if (ret > mx) mx = ret;
    return ret;
});

const isSmaller = (arr, height) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i] - height > 0 ? arr[i] - height : 0;
        if (sum >= h) return false;
    }
    return true;
};

const solution = () => {
    let lo = 0, hi = mx, mid = 0;
    
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        isSmaller(nums, mid) ? hi = mid - 1 : lo = mid + 1;
    }
    console.log(hi);
};

solution();