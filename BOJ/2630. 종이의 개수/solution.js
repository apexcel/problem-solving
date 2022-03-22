const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const mat = data.map(d => d.split(' ').map(Number));
let white = 0, blue = 0;

const check = (x1, y1, x2, y2) => {
    const begin = mat[y1][x1];
    for (let y = y1; y < y2; y += 1) {
        for (let x = x1; x < x2; x += 1) {
            if (begin !== mat[y][x]) return false;
        }
    }
    return true;
}

const solution = (size, x1, y1, x2, y2) => {
    if (check(x1, y1, x2, y2)) {
        mat[y1][x1] ? blue += 1 : white += 1;
        return;
    }

    const half = size >> 1;
    solution(half, x1, y1, x2 - half, y2 - half);
    solution(half, x1 + half, y1, x2, y2 - half);
    solution(half, x1, y1 + half, x2 - half, y2)
    solution(half, x1 + half, y1 + half, x2, y2);
}

solution(+n, 0, 0, +n, +n);
console.log(white);
console.log(blue);