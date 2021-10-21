const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const s = input[1].split(' ');
const a = Array(s.length).fill(0), b = Array(s.length).fill(0);

for (let i = 0; i < s.length; i += 1) {
    a[i] = +s[i];
    for (let j = 0; j < i; j += 1) {
        a[j] > a[i] ? b[j]++ : b[i]++;
    }
}

console.log(b.join(' '));