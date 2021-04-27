const scan = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(el => Boolean(el));
const tc = parseInt(scan[0], 10);
let cases = [
    [0, 0, 0],
];
let M = Array.from(new Array(tc + 1), () => new Array(3));
M[0][0] = 0, M[0][1] = 0, M[0][2] = 0;
scan.slice(1).map(el => el.split(' ').map(el => parseInt(el, 10))).map(el => cases.push(el));

const min = (a, b) => a > b ? b : a;
const rgb = (n) => {
    for (let i = 1; i <= n; i++) {
        M[i][0] = min(M[i-1][1], M[i-1][2]) + cases[i][0];
        M[i][1] = min(M[i-1][0], M[i-1][2]) + cases[i][1];
        M[i][2] = min(M[i-1][0], M[i-1][1]) + cases[i][2];
    }
    console.log(min(min(M[n][0], M[n][1]), M[n][2]));
}

rgb(tc);