const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const size = +n;
const mat = data.map(d => d.split(' ').map(Number));
const res = [0, 0, 0];

const check = (size, x, y) => {
    const begin = mat[y][x]
    for (let i = y; i < y + size; i += 1) {
        for (let j = x; j < x + size; j += 1) {
            if (begin !== mat[i][j]) return false;
        }
    }
    return true;
}

const solution = (size, x, y) => {
    if (check(size, x, y)) {
        const val = mat[y][x];
        res[1 + val] += 1;
        return;
    }
    const trisect = size / 3;

    solution(trisect, x, y);
    solution(trisect, x + trisect, y);
    solution(trisect, x + (2 * trisect) , y);

    solution(trisect, x, y + trisect);
    solution(trisect, x + trisect, y + trisect);
    solution(trisect, x + (2 * trisect), y + trisect);

    solution(trisect, x, y + (2 * trisect));
    solution(trisect, x + trisect, y + (2 * trisect));
    solution(trisect, x + (2 * trisect), y + (2 * trisect));
}

solution(size, 0, 0);
console.log(res.join('\n'));