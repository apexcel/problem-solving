// https://www.acmicpc.net/problem/1157
const s = require('fs').readFileSync('/dev/stdin').toString().toUpperCase().trim();
const a = Array(26).fill(0);
let p = 0, m = 0, idx = 0;

for (let i = 0; i < s.length; i += 1) {
    a[s[i].charCodeAt(0) - 65] += 1;
}

for (let i = 0; i < a.length; i += 1) {
    if (a[i] >= m) {
        p = m;
        m = a[i];
        idx = i;
    }
}
console.log(p === m ? '?' : String.fromCharCode(65 + idx));
