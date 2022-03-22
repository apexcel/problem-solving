const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const k = n / 2;
const mat = data.map(d => d.split(' ').map(Number));
let tmp = Array(n).fill(0);
let res = 987654321;

const calcDiff = (arr) => {
    let a = 0, b = 0;
    for (let i = 0; i < +n; i += 1) {
        for (let j = 0; j < +n; j += 1) {
            if (arr[i] && arr[j]) {
                a += mat[i][j];
            }
            else if (!arr[i] & !arr[j]) {
                b += mat[i][j];
            }
        }
    }
    return Math.abs(a - b);
}

const pick = (begin, depth) => {
    if (depth === k) {
        res = Math.min(res, calcDiff(tmp));
        return;
    }

    for (let i = begin; i < +n; i += 1) {
        tmp[i] = 1;
        pick(i + 1, depth + 1);
        tmp[i] = 0;
    }
}

pick(0, 0);
console.log(res);