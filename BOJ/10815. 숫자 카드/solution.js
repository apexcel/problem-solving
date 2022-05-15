const input = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const map = new Map();
input[1].split(' ').forEach(v => map.set(v, 1));
const res = input[3].split(' ').map(v => map.get(v) || 0);
console.log(res.join(' '));