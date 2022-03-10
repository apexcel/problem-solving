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
    const stk = [[0, arr[0]]];
    let idx = 0;

    for (let i = 1; i < +n; i += 1) {
        if (tails[idx] < arr[i]) {
            idx += 1;
            tails[idx] = arr[i];
            stk.push([idx, arr[i]]);
        }
        else {
            const j = binSearch(tails, arr[i]);
            tails[j] = arr[i];
            stk.push([j, arr[i]]);
        }
    }

    const seq = [];
    for (let i = stk.length - 1, j = idx; i >= 0; i -= 1) {
        if (stk[i][0] === j) {
            seq.push(stk[i][1]);
            j -= 1;
        }
    }

    console.log(idx + 1);
    console.log(seq.reverse().join(' '));
};

lis(nums);