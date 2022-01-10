const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const binSearch = (arr, target) => {
    let lo = 0, hi = arr.length - 1, mid;
    while (hi > lo) {
        mid = Math.floor((lo + hi) / 2);
        arr[mid] > target ? lo = mid + 1 : hi = mid;
    }
    return lo;
}

const lis = nums => {
    const tails = [nums[0]];
    let idx = 0;

    for (let i = 1; i < nums.length; i += 1) {
        if (tails[idx] > nums[i]) {
            idx += 1;
            tails[idx] = nums[i];
        }
        else {
            tails[binSearch(tails, nums[i])] = nums[i];
        }
    }
    return idx + 1;
}
console.log(lis(input[1].split(' ').map(Number)));