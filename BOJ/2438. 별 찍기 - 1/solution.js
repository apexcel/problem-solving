const n = +require('fs').readFileSync('/dev/stdin').toString();
let str = '';
for (let i = 1; i <= n; i += 1) {
    for (let j = 0; j < i; j += 1) str += '*';
    str += '\n';
}
console.log(str);