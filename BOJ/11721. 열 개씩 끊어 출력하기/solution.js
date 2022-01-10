const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const quot = Math.floor(input.length / 10);
let res = '';
for (let i = 0; i <= quot; i += 1) res += input.slice(i * 10, 10 * (i + 1)) + '\n';
console.log(res);