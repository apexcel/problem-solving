const [info, robot, ...data] = require('fs').readFileSync(__dirname + '/data.in').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);
const [ry, rx, rd] = robot.split(' ').map(Number);
const mat = data.map(d => d.split(' ').map(Number));

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;
const isVisited = Array.from(Array(h), () => Array(w).fill(0));
let cnt = 0;

const dfs = (x, y, look) => {
    if (!isVisited[y][x]) {
        cnt += 1;
        isVisited[y][x] = 1;
    }
    
    for (let i = 0; i < 4; i += 1) {
        look = (look + 3) % 4;
        const [dx, dy] = dir[look];
        const nx = x + dx, ny = y + dy;
        if (isValidPosition(nx, ny) && !isVisited[ny][nx] && !mat[ny][nx]) {
            dfs(nx, ny, look);
            return;
        }
    }

    const [dx, dy] = dir[(look + 2) % 4];
    const nx = x + dx, ny = y + dy;
    if (isValidPosition(nx, ny) && !mat[ny][nx]) dfs(nx, ny, look);
}

dfs(rx, ry, rd);
console.log(cnt);
