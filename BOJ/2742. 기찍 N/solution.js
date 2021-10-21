const n = require('fs').readFileSync('/dev/stdin').toString();
let str = '';
for (let i = +n; i > 0; i -= 1) {
    str += i + '\n';
}
console.log(str);