const gcd = (a, b) => a % b ? gcd(b, a % b) : b;
const lcm = (a, b) => a * b / gcd(a, b);
const res = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).reduce((acc, cur) => {
    const [a, b] = cur.split(' ');
    acc += lcm(+a, +b) + '\n';
    return acc;
}, '');
console.log(res);