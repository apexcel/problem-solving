const n = +require('fs').readFileSync('/dev/stdin').toString();
let res = '';
for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < i; j += 1) res += ' ';
    for (let j = n - i; j > 0; j -= 1) res += '*';
    res += '\n';
}
console.log(res);