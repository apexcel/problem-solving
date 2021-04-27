// const n = 5;
// const p = [3, 1, 4, 3, 2];

const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(sc[0], 10);
const P = sc[1].split(' ').map(v => parseInt(v, 10));
P.sort((a, b) => a - b);

const solution = (n, p) => {
    let sum = p[0];
    for (let i = 1; i < p.length; i += 1) {
        p[i] += p[i - 1];
        sum += p[i];
    }
    console.log(sum)
};

solution(N, P);