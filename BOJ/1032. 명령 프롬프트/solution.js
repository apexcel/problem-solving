const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = data[0].split('');

for (let i = 1; i < +n; i += 1) {
    for (let j = 0; j < data[0].length; j += 1) {
        if (res[j] !== data[i][j]) {
            res[j] = '?';
        }
    }
}
console.log(res.join(''));