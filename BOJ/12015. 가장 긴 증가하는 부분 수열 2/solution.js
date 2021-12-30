const [n, str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = str.split(' ').map(Number);

const binSearch = (arr, target) => {
    let lo = 0, hi = arr.length - 1, mid;

    while (lo < hi) {
        mid = Math.floor((lo + hi) / 2);
        arr[mid] < target ? lo = mid + 1 : hi = mid;
    }

    return lo;
};

const lis = arr => {
    const tails = [arr[0]];
    let idx = 0;

    for (let i = 1; i < +n; i += 1) {
        if (tails[idx] < arr[i]) {
            idx += 1;
            tails[idx] = arr[i];
        }
        else {
            tails[binSearch(tails, arr[i])] = arr[i];
        }
    }
    return idx + 1;
};

console.log(lis(nums));