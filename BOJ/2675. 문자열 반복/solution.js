const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const cases = input.slice(1).map(v => v.split(' '));
let str = '';
for (let i = 0; i < cases.length; i += 1) {
    const [r, s] = cases[i];
    let temp = '';
    for (let j = 0; j < s.length; j += 1) {
        for (let k = 0; k < +r; k += 1) {
            temp += s[j]
        }
    }
    str += temp + '\n';
}
console.log(str);