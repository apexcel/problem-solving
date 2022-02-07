const n = require('fs').readFileSync('/dev/stdin').toString().trim().split('').sort((a, b) => b - a);
if (!n.includes('0') || n.reduce((sum, cur) => sum + +cur, 0) % 3 !== 0) {
    console.log(-1);
}
else {
    console.log(n.join(''));
}