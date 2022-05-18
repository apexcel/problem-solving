const [time, need] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [hh, mm] = time.split(' ').map(Number);
let minute = hh * 60 + mm;
const s = (minute + Number(need));
const h = Math.floor(s / 60), m = s % 60;
console.log(h >= 24 ? h - 24 : h, m);