const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const board = data.map(d => d.split(' ').map(Number));

const maxElement = board.flat().reduce((acc, cur) => acc = acc >= cur ? acc : cur, 0);

const isVisited = Array.from(Array(n), () => Array(m).fill(0));

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < n && x < m;

const teeTetromino = (x, y) => {
    let ret = 0;
    loop: for (let i = 0; i < 4; i += 1) {
        let sum = board[y][x];
        for (let j = 0; j < 3; j += 1) {
            const [dx, dy] = dir[(i + j) % 4];
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny)) continue loop;
            sum += board[ny][nx];
        }
        ret = Math.max(ret, sum);
    }
    return ret;
}

let dsum = 0, maxSum = 0;
const dfs = (x, y, depth) => {
    if (depth === 4) {
        maxSum = Math.max(maxSum, dsum);
        return;
    }
    if (maxSum > maxElement * (4 - depth) + dsum) {
        return;
    }
    dsum += board[y][x];
    isVisited[y][x] = 1;
    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (!isValidPosition(nx, ny) || isVisited[ny][nx]) continue;
        dfs(nx, ny, depth + 1);
    }
    isVisited[y][x] = 0;
    dsum -= board[y][x];
}

for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < m; x += 1) {
        maxSum = Math.max(maxSum, teeTetromino(x, y));
        dfs(x, y, 0);
    }
}

console.log(maxSum);