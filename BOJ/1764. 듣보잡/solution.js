const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const map = new Map();
const res = [];
data.slice(0, n).forEach(name => map.set(name, 0));
data.slice(n).forEach(name => map.has(name) ? res.push(name) : null);

console.log(res.length);
console.log(res.sort().join('\n'));
