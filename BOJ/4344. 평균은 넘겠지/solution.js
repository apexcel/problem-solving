const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let str = '';

for (let i = 1; i < input.length; i += 1) {
    const values = input[i].split(' ').slice(1).map(v => +v);
    const avg = values.reduce((prev, curr) => prev + curr, 0) / values.length;
    let cnt = 0;
    values.forEach(v => cnt += v > avg ? 1 : 0);
    str += (cnt / values.length * 100).toFixed(3) + '%\n';
}

console.log(str);