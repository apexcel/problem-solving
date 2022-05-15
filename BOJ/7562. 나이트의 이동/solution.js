const [tc, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const dir = [
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
];

const isValidPosition = (x, y, size) => y >= 0 && x >= 0 && y < size && x < size;

const BFS = (size, src, dest) => {
    const [bx, by] = src
        , [ex, ey] = dest
        , visited = Array.from(Array(size), () => Array(size).fill(0))
        , q = [[bx, by, 0]];

    visited[by][bx] = 1;

    while (q.length) {
        const [x, y, cnt] = q.shift();

        if (x === ex && y === ey) {
            console.log(cnt);
            break;
        }

        for (let [dx, dy] of dir) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny, size) || visited[ny][nx]) continue;
            visited[ny][nx] = 1;
            q.push([nx, ny, cnt + 1]);
        }
    }
}

for (let i = 0; i < data.length; i += 3) {
    const size = +data[i];
    const src = data[i + 1].split(' ').map(Number);
    const dest = data[i + 2].split(' ').map(Number);
    BFS(size, src, dest);
}