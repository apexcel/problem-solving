const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(Boolean);
let val = input.reduce((acc, cur) => acc * cur);
let res = new Array(10).fill(0);
while (val > 0) {
    res[val % 10] += 1;
    val = parseInt(val / 10);
}
res.forEach(el => console.log(el));