const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(Boolean);
const sum = input.map(el => {
    return el < 40 ? 40 : parseInt(el, 10);
}).reduce((acc, val) => acc + val);
console.log(sum / input.length);