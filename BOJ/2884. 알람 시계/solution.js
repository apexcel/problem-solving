const [hh, mm] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => parseInt(v, 10));
const time = (hh === 0 ? 24 * 60 : hh * 60) + mm;
const h = ~~((time - 45) / 60), m = (time - 45) % 60;
console.log(h === 24 ? 0 : h, m);