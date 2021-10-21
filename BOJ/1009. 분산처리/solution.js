const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let res = '';
for (let i = 0; i < parseInt(input[0], 10); i += 1) {
    let [a, b] = input[i + 1].split(' ').map(v => parseInt(v, 10));
    b = b % 4 + 4;
    let pow = 1;
    while (b--) {
        pow = (pow * a) % 10;
    }
    res += pow === 0 ? '10\n' : pow + '\n';
}
console.log(res);
