const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let str = '';
for (let i = 1; i < input.length; i += 1) {
    str += `Case #${i}: ${input[i].split(' ').reduce((acc, cur) => acc + +cur, 0)}\n`;
}
console.log(str);