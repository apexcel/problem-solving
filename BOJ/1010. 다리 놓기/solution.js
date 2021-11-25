const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let str = '';

for (let i = 1; i < input.length; i += 1) {
    const [r, n] = input[i].split(' ');
    let res = 1;

    for (let j = 1; j <= r; j += 1) {
        console.log(res, n, n -j + 1, j)
        res = res * (n - j + 1) / j;
    }
    str += res + '\n';

}

console.log(str);