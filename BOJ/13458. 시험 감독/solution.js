const [n, applicants, info] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [b, c] = info.split(' ').map(Number);
const a = applicants.split(' ').reduce((acc, cur) => acc += cur >= b ? Math.ceil((cur - b) / c) : 0, 0);
console.log(+n + a);
