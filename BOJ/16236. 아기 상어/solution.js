const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const SIZE = +n;
const shark = {
    weight: 2,
    eaten: 0,
    moved: 0,
    coords: [0, 0]
};

const board = data.map((row, y) =>
    row.split(' ').map((v, x) => {
        const ret = +v;
        if (ret === 9) shark.coords = [x, y];
        return ret;
    })
);

const dir = [
    [0, -1],
    [-1, 0],
    [1, 0],
    [0, 1],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < SIZE && x < SIZE;

const isEdible = (x, y) => board[y][x] > 0 && board[y][x] < shark.weight;

const canMove = (x, y) => board[y][x] <= shark.weight;

const bfs = (bx, by, prevMoved) => {
    const q = [[bx, by, prevMoved]];
    const isVisited = Array.from(Array(SIZE), () => Array(SIZE).fill(-1));
    const dist = [];
    isVisited[by][bx] = 0;
    board[by][bx] = 0;

    while (q.length) {
        const [x, y, moved] = q.shift();

        for (let [dx, dy] of dir) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny) || isVisited[ny][nx] !== -1 || !canMove(nx, ny)) continue;
            isVisited[ny][nx] = isVisited[y][x] + 1;

            if (isEdible(nx, ny)) dist.push([nx, ny, moved + 1]);
            else q.push([nx, ny, moved + 1]);
        }
    }
    dist.sort((a, b) => a[2] - b[2] || a[1] - b[1] || a[0] - b[0]);
    return dist[0];
}

let pos = bfs(shark.coords[0], shark.coords[1], 0);
while (pos) {
    const [x, y, moved] = pos;
    board[y][x] = 0;
    shark.eaten += 1;
    if (shark.weight === shark.eaten) {
        shark.weight += 1;
        shark.eaten = 0;
    }
    shark.moved += moved;
    pos = bfs(x, y, 0);
}
console.log(shark.moved);