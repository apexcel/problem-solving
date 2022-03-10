const [n, c1, m, c2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const map = new Map();
c1.split(' ').forEach(ch => map.set(ch, map.get(ch) + 1 || 1));
const result = c2.split(' ').reduce((acc, cur) => {
    acc.push(map.get(cur) ? map.get(cur) : 0);
    return acc;
}, []).join(' ');
console.log(result);