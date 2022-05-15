const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
const data = input.map(d => d.split(' ').map(Number));
const tmp = [];
let res ='';

const pick = (depth, begin, k, idx) => {
    if (depth === 6) {
        res += tmp.join(' ') + '\n';
        return;
    }

    for (let i = begin; i <= k; i += 1) {
        tmp.push(data[idx][i]);
        pick(depth + 1, i + 1, k, idx);
        tmp.pop();
    }
}

data.forEach((d, i) => {
    pick(0, 1, d[0], i)
    res += '\n';
});

console.log(res);