let s = require('fs').readFileSync('/dev/stdin').toString().trim();
const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
for (let c of croatian) s = s.split(c).join('*');
console.log(s.length);