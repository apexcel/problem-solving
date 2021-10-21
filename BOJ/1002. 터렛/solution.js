const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = '';
for (let i = 1; i < input.length; i += 1) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(v => +v);
    const d = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    const sub = Math.pow(r1 - r2, 2), sum = Math.pow(r1 + r2, 2);

    if (sub < d && d < sum) res += 2;
    else if (d === 0 && r1 === r2) res += -1;
    else if (sub === d || d === sum) res += 1;
    else res += 0;
    res += '\n'
}

console.log(res);