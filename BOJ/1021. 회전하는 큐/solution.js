const [info, data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const targets = data.split(' ').map(Number);
const nums = Array(n).fill(0).map((_, i) => i + 1);

const { abs, min } = Math;
let cur = 0, cnt = 0, mn = 0;

for (let target of targets) {
    if (!nums.includes(target)) continue;
    const idx = nums.indexOf(target);
    const l1 = abs(cur - idx), l2 = abs(nums.length - l1);
    mn = min(l1, l2);
    cnt += mn;

    nums.splice(idx, 1);
    cur = nums.indexOf(nums[idx]);
    if (cur < 0) cur = 0;
}

console.log(cnt);