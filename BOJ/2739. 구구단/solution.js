const n = parseInt(require('fs').readFileSync('/dev/stdin').toString(), 10);
let s = '';
for (let i = 1; i <= 9; i += 1) s += `${n} * ${i} = ${i*n}\n`;
console.log(s);