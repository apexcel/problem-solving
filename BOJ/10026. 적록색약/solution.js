const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const SIZE = +n;

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && x < SIZE && y < SIZE;

let isVisited = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
let mat = data.map(row => row.split(''));

const BFS = (bx, by) => {
    const q = [[bx, by]];
    const beginValue = mat[by][bx];
    isVisited[by][bx] = 1;

    while (q.length) {
        const [x, y] = q.pop();

        for (let [dx, dy] of dir) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny) || isVisited[ny][nx]) continue;
            if (beginValue === mat[ny][nx]) {
                isVisited[ny][nx] = 1;
                q.push([nx, ny]);
            }
        }
    }
}

let cnt1 = 0;
for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
        if (!isVisited[y][x]) {
            BFS(x, y);
            cnt1 += 1;
        }
    }
}

isVisited = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
mat = mat.map(row => row.map(v => v === 'R' ? 'G' : v));

let cnt2 = 0;
for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
        if (!isVisited[y][x]) {
            BFS(x, y);
            cnt2 += 1;
        }
    }
}

console.log(cnt1, cnt2);