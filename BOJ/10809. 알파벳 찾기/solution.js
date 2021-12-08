const str = require('fs').readFileSync('/dev/stdin').toString();
const a = Array(26).fill(-1);
for (let i = 0; i < str.length; i += 1) {
    const idx = str[i].charCodeAt(0) - 97;
    a[idx] = a[idx] < 0 ? i : a[idx];
}
console.log(a.join(' '));