const [n, data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const size = parseInt(n), half = size >> 1;
const nums = data.split(' ').map(Number).sort((a, b) => a - b);
const { abs } = Math;

const sum = arr => {
    let ret = 0;
    for (let i = 1; i < arr.length; i += 1) {
        ret += abs(arr[i - 1] - arr[i]);
    }
    return ret;
}

let res = [];
for (let i = 0; i < half; i += 1) {
    const left = nums[i], right = nums[nums.length - 1 - i];
    if (i % 2) {
        res.unshift(right);
        res.push(left);
    }
    else {
        res.unshift(left);
        res.push(right);
    }
}

if (size % 2) {
    const begin = res[0], mid = nums[half], end = res.at(-1);
    abs(begin - mid) > abs(end - mid)
        ? res.unshift(mid)
        : res.push(mid);
}

console.log(sum(res));