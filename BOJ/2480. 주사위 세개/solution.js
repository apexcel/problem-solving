const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);

let v;
if (a === b && b === c) v = 10000 + (1000 * a);
else if (a === b || b === c) v = 1000 + (b * 100);
else v = 100 * c;
console.log(v);