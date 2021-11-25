const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let str = '';
for (let i = 1; i < input.length; i += 1) {
    const [x, y] = input[i].split(' ')
    str += `Case #${i}: ${+x} + ${+y} = ${+x + +y}\n`;
}
console.log(str);