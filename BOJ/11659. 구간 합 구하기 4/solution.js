const sc = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const parse = str => str.split(' ').map(n => parseInt(n));
const [n, m] = parse(sc[0]);
const nums = parse(sc[1]);
const ranges = [];

for (let i = 2; i < sc.length; i += 1) {
    ranges[i - 2] = parse(sc[i]);
}

const sum = [nums[0]];
for (let i = 1; i < n; i += 1) {
    sum[i] = sum[i - 1] + nums[i];
}

let res = '';
for (let i = 0; i < m; i += 1) {
    const [begin, end] = ranges[i];
    if (begin - 2 < 0) res += sum[end - 1];
    else res += sum[end - 1] - sum[begin - 2];
    res += '\n';
}

console.log(res);