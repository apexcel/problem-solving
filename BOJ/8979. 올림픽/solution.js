const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);

const list = data.map(d => d.split(' ').map(Number)).sort((a, b) => b[1] - a[1] || b[2] - a[2] || b[3] - a[3]);
const idx = list.findIndex(item => item[0] === k);
const [tk, tg, ts, tc] = list[idx];
let rank = 1, acc = 0;

for (let i = 0; i < list.length; i += 1) {
    const [ck, cg, cs, cc] = list[i];
    if (cg !== tg || cs !== ts || cc !== tc) acc += 1;
    else break;
}
console.log(rank + acc);