const [info, nums, ...ranges] = require('fs').readFileSync('./data.in').toString().split('\n');
const [n, m] = info.split(' ').map(Number);
const k = nums.split(' ').map(Number);
const psum = [0];
const res = [];

k.forEach((v, i) => psum[i + 1] = psum[i] + v)

for (const range of ranges) {
    const [begin, end] = range.split(' ').map(Number);
    res.push(psum[end] - psum[begin - 1]);
}

console.log(res.join('\n'));
