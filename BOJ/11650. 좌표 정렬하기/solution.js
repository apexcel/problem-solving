const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const sorted = input.slice(1).reduce((acc, cur) => {
    const [x, y] = cur.split(' ');
    acc.push([+x, +y]);
    return acc;
}, []).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
let res = '';

for (let coords of sorted) res += `${coords[0]} ${coords[1]}\n`;
console.log(res);
