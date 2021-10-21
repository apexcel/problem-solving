const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let res = '';

for (let i = 1; i <= input[0]; i += 1) {
    const [a, b] = input[i].split(' ');
    res += (+a) + (+b) + '\n';
}

console.log(res);