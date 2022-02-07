const input = require('fs').readFileSync('/dev/stdin').toString();
let zero = 0, one = 0;

for (let i = 1; i <= input.length; i += 1) {
    if (input[i - 1] === '0' && input[i] !== '0') zero += 1;
    if (input[i - 1] === '1' && input[i] !== '1') one += 1;
}

console.log(Math.min(zero, one));