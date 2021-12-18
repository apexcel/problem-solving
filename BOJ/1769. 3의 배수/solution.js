const n = require('fs').readFileSync('/dev/stdin').toString().trim();
let sum = [...n.toString()], cnt = 0;
while (sum.length > 1) {
    sum = Array.prototype.reduce.call(sum, (acc, cur) => acc + (+cur), 0).toString();
    cnt += 1;
}
console.log(cnt);
console.log(+sum % 3 === 0 ? 'YES' : 'NO');
