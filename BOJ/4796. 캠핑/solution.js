const data = require('fs').readFileSync('./data.in').toString().trim().split('\n');
data.pop();
console.log(data.map((d, i) => {
    const [l, p, v] = d.split(' ').map(Number);
    return `Case ${i + 1}: ${Math.floor(v / p) * l + (Math.min(v % p, l))}`;
}).join('\n'));