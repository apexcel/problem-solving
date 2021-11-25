const n = +require('fs').readFileSync('/dev/stdin').toString();
let str = '';
for (let i = 1; i <= n; i += 1) {
    for (let j = n - i; j > 0; j -= 1) str += ' ';
    for (let k = 0; k < i; k += 1) str += '*';
    str += '\n';
}
console.log(str);