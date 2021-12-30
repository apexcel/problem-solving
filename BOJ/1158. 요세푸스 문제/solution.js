const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const solution = (n, k) => {
    const q = Array(n).fill(0).map((_, i) => i + 1);
    const res = [];
    let pos = k - 1;
    while(q.length) {
        res.push(q.splice(pos, 1));
        pos = (pos + k - 1) % q.length;
    }
    return res.join(', ');
};
console.log(`<${solution(+a, +b)}>`);