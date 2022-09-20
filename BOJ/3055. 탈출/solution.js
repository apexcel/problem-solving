const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [r, c] = info.split(' ').map(Number);
const mat = data.map(d => d.split(''));
const visited = Array.from(Array(r), () => Array(c).fill(0));
const dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];
const hedgehog = [], puddles = [];
let done = -1, cnt = 0;

for (let y = 0; y < r; y += 1) {
    for (let x = 0; x < c; x += 1) {
        if (mat[y][x] === 'X' || mat[y][x] === '*') {
            if (mat[y][x] === '*') puddles.push([x, y]);
            visited[y][x] = 1;
        }
        if (mat[y][x] === 'S') {
            hedgehog.push([x, y]);
            visited[y][x] = 2;
        }
    }
}

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < r && x < c;

const canMove = (type, x, y) => type  === 1 ? (visited[y][x] !== 1 && mat[y][x] !== 'D') : !visited[y][x];

const search = (source, type) => {
    const temp = [];
    while (source.length) {
        const [x, y] = source.shift();
        visited[y][x] = type;

        for (const [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny) || !canMove(type, nx, ny)) continue;
            if (type === 2 && mat[ny][nx] === 'D') return 1;
            visited[ny][nx] = type;
            temp.push([nx, ny]);
        }
    }
    source.push(...temp);
    return source.length ? -1 : 0;
}

while (done !== 1 && done !== 0) {
    search(puddles, 1);
    done = search(hedgehog, 2);
    cnt += 1;
}

console.log(done ? cnt : 'KAKTUS');