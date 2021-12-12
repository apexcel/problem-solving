const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = '';
input.slice(1).forEach(v => {
    const [a, b] = v.split(' ');
    res += calc(b - a) + '\n';
});

console.log(res);

function calc(dist) {
    const x = Math.floor(Math.sqrt(dist));
    const lte = x ** 2, gt = (x + 1) ** 2;

    if (x ** 2 === dist) return 2 * x - 1
    else return lte + gt > 2 * dist ? 2 * x : 2 * (x + 1) - 1;
}