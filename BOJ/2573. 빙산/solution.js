const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);
const mat = data.map(d => d.split(' ').map(Number));

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

const initMatrix = () => Array.from(Array(h), () => Array(w).fill(0));

let isVisited = initMatrix();

const bfs = (x, y) => {
    const q = [[x, y]];
    isVisited[y][x] = 1;

    while (q.length) {
        const [cx, cy] = q.shift();

        for (let [dx, dy] of dir) {
            const nx = cx + dx, ny = cy + dy;
            if (isValidPosition(nx, ny) && !isVisited[ny][nx]) {
                if (mat[ny][nx]) {
                    isVisited[ny][nx] = 1;
                    q.push([nx, ny]);
                }
                else {
                    mat[cy][cx] += mat[cy][cx] ? -1 : 0;
                }
            }
        }
    }
}

const melt = (year) => {
    let glaciers = 0;
    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (mat[y][x] && !isVisited[y][x]) {
                bfs(x, y);
                glaciers += 1;
            }
        }
    }

    if (glaciers >= 2) {
        console.log(year);
        process.exit();
    }
    else if (glaciers === 0) {
        console.log(0);
        process.exit();
    }

    isVisited = initMatrix();
    melt(year + 1);
}

melt(0);