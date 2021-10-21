const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let str = '';
for (let i = 0; i < parseInt(input[0]); i += 1) {
    const [a, b] = input[i + 1].split(' ').map(v => parseInt(v, 10));
    str += `${a + b}\n`;
}
console.log(str);