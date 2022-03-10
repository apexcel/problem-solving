const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const sum = data.reduce((acc, datum) => {
    const [pupils, apples] = datum.split(' ').map(Number)
    acc += apples % pupils;
    return acc;
}, 0);
console.log(sum);