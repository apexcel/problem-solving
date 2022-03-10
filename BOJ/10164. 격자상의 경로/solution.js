const [n, m, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let coord = [m - 1, n - 1];

const mat = Array.from(Array(n), (_, i) => Array(m).fill(0).map((v, j) => {
    const pos = m * i + (j + 1);
    if (k && pos === k) coord = [j, i];
    return 1;
}));

for (let y = 1; y <= coord[1]; y += 1) {
    for (let x = 1; x <= coord[0]; x += 1) {
        mat[y][x] = mat[y - 1][x] + mat[y][x - 1];
    }
}

for (let y = coord[1] + 1; y < n; y += 1) {
    for (let x = coord[0] + 1; x < m; x += 1) {
        mat[y][x] = mat[y - 1][x] + mat[y][x - 1];
    }
}

const res = k ? mat[n - 1][m - 1] * mat[coord[1]][coord[0]] : mat[n - 1][m - 1];
console.log(res);