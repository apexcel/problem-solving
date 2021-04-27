const input = require('fs').readFileSync('/dev/stdin').toString();
const n = parseInt(input);
let line = '';
for (let i = 1; i <= n; i += 1) {
    for (let j = 0; j < (2 * n) - 1; j += 1) {
        if (j % 2 === 0) line += '*';
        if (j % 2 !== 0) line += ' ';
        if (n % 2 === 0) {
            if (j === n - 1) line += '\n ';
        }
        if (n % 2 !== 0) {
            if (j === n) line += '\n ';
        }
    }
    line += '\n';
}
console.log(line);