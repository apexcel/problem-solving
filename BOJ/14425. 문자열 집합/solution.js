const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const set = new Set();

data.slice(0, n).forEach(str => set.add(str));
const filtered = data.slice(n).filter(str => set.has(str));
console.log(filtered.length);