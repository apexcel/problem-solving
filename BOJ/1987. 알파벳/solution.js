const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);

const mat = data.map(d => d.split('').map(ch => ch.charCodeAt(0) - 65));

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const a = Array(26).fill(0);

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

let mx = 1;
const DFS = (x, y, depth) => {
    mx = Math.max(mx, depth);

    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (isValidPosition(nx, ny)) {
            if (!a[mat[ny][nx]]) {
                a[mat[ny][nx]] = 1;
                DFS(nx, ny, depth + 1);
                a[mat[ny][nx]] = 0;
            }
        }
    }
}

a[mat[0][0]] = 1;
DFS(0, 0, 1);
console.log(mx);