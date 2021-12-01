const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let mx = -1, idx = -1;
for (let i = 0; i < input.length; i += 1) {
    const n = +input[i];
    if (mx < n) {
        mx = n;
        idx = i;
    }
}
console.log('' + mx + '\n' + (idx + 1));