const data = require('fs').readFileSync('./data.in').toString().trim().split('\n').sort();
const map = new Map();
let res = '';

data.forEach(d => map.set(d, map.get(d) + 1 || 1));

for (let [key, value] of map) {
    res += `${key} ${(value / data.length * 100).toFixed(4)}\n`;
}
console.log(res);