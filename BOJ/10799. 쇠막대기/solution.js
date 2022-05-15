const data = require('fs').readFileSync('./data.in').toString().trim();
const replaced = data.replaceAll('()', '-');
let prev, left = 0, res = 0;

for (let d of replaced) {
    if (d === '(') {
        left += 1;
    }
    else if (d === ')') {
        left -= 1;
        res += 1;
    }
    else res += left;
    prev = d;
}

console.log(res);
