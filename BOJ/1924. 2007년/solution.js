const [m, d] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const mm = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const idx = d + 106 + (m >= 3 ? 7 : 6) + Math.floor(2.6 * mm[m-1] - 0.2);
console.log(week[idx % 7]);