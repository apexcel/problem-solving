const input = require('fs').readFileSync('/dev/stdin').toString();
let line = "";
for (let i = 0; i < input; i += 1) {
    for (let j = 1; i >= j; j += 1) {
        line += ' ';
    }
    for (let j = (2 * (input - i)) - 1; j > 0; j -= 1) {
        line += '*';
    }
    line += '\n';
}
for (let i = 1; i < input; i += 1) {
    for (let j = input - i - 1; j > 0 ; j -= 1) {
        line += ' ';
    }
    for (let j = 0; j <= 2 * i; j += 1) {
        line += '*';
    }
    if (i < input - 1) line += '\n';
}
console.log(line);