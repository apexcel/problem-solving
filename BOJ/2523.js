const input = require('fs').readFileSync('/dev/stdin').toString();
let print = '';
for (let i = 0; i < (2 * input)- 1; i += 1) {
    if (i < input) {
        for (let j = 0; j <= i; j += 1) {
            print += '*';
        }
        print += '\n';
    }
    else {
        for (let j = (2 * input - 1) - i; j > 0; j -= 1) {
            print += '*';
        }
        print += '\n';
    }
}
console.log(print);