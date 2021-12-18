const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [h, w] = input[0].split(' ').map(Number);
const board = input.slice(1);
const dir = [[0, -1], [1, 0], [0, 1], [-1, 0]];
const bfs = () => {
    const q = [[0, 0]];
    const isVisited = Array.from(Array(h), () => Array(w).fill(0));
    const dist = Array.from(Array(h), () => Array(w).fill(0));
    isVisited[0][0] = 1;

    while (q.length) {
        const [x, y] = q.shift();

        for (let i = 0; i < dir.length; i += 1) {
            const [dx, dy] = dir[i];
            const nx = x + dx, ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= w || ny >= h || board[ny][nx] === '0' || isVisited[ny][nx]) continue;
            isVisited[ny][nx] = 1;
            dist[ny][nx] = dist[y][x] + 1;
            q.push([nx, ny]);
        }
    }
    console.log(dist[h-1][w-1] + 1);
};
bfs();