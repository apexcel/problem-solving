const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const map = new Map();
const res = [];

for (let i = 0; i < n; i += 1) {
    map.set(data[i], i + 1);
    map.set('' + (i + 1), data[i]);
}

for (let i = n; i < n + m; i += 1) {
    res.push(map.get(data[i]));
}

console.log(res.join('\n'));