const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let res = 0, legs = 0;

for (let i = 0; i < input.length; i += 1) {
    const prev = input[i - 1], curr = input[i];
    if (prev + curr === '((') legs += 1;
    if (prev + curr === '))') res += legs;
}

console.log(res);
