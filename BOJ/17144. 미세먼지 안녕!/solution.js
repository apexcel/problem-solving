const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [h, w, t] = info.split(' ').map(Number);
const purifier = [];
let matrix = data.map(row => row.split(' ').map(Number));
let next;

for (let i = 0; i < h; i += 1) {
    if (matrix[i][0] === -1) purifier.push(0, i);
}

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPoisiton = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

const canSpread = (x, y) => isValidPoisiton(x, y) && matrix[y][x] !== -1;

const purify = () => {
    const [ux, uy, lx, ly] = purifier;

    for (let y = uy; y > 0; y -= 1) {
        matrix[y][ux] = matrix[y - 1][ux];
    }

    for (let x = 0; x < w - 1; x += 1) {
        matrix[0][x] = matrix[0][x + 1];
    }

    for (let y = 0; y < uy; y += 1) {
        matrix[y][w - 1] = matrix[y + 1][w - 1];
    }

    for (let x = w - 1; x > 0; x -= 1) {
        matrix[uy][x] = matrix[uy][x - 1];
    }
    matrix[uy][ux] = -1;
    matrix[uy][ux + 1] = 0;

    for (let y = ly; y < h - 1; y += 1) {
        matrix[y][0] = matrix[y + 1][0];
    }

    for (let x = 0; x < w - 1; x += 1) {
        matrix[h - 1][x] = matrix[h - 1][x + 1];
    }

    for (let y = h - 1; y > ly; y -= 1) {
        matrix[y][w - 1] = matrix[y - 1][w - 1];
    }

    for (let x = w - 1; x > 0; x -= 1) {
        matrix[ly][x] = matrix[ly][x - 1];
    }
    matrix[ly][lx] = -1;
    matrix[ly][lx + 1] = 0;
}

const spread = (x, y) => {
    const val = Math.floor(matrix[y][x] / 5);
    let cnt = 0;
    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (canSpread(nx, ny)) {
            next[ny][nx] += val;
            cnt += 1;
        }
    }
    next[y][x] -= val * cnt;
    if (next[y][x] < 0) next[y][x] = 0;
}


for (let i = 0; i < t; i += 1) {
    next = matrix.map(mat => mat.slice());
    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (matrix[y][x] > 0) {
                spread(x, y);
            }
        }
    }
    matrix = next;
    purify();
}

const res = matrix.reduce((acc, mat) => acc + mat.reduce((acc, cur) => acc + cur, 0), 0) + 2;
console.log(res);