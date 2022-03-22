const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);
const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

let mx = -1;

const bfs = (x, y) => {
    const q = [[x, y, 1]];
    const isVisited = Array.from(Array(h), (_, i) => Array.prototype.map.call(data[i], v => v === 'W' ? -1 : 0));
    isVisited[y][x] = 1;

    while (q.length) {
        const [cx, cy, cnt] = q.shift();
        mx = Math.max(mx, cnt);

        for (let [dx, dy] of dir) {
            const nx = cx + dx, ny = cy + dy;
            if (isValidPosition(nx, ny) && !isVisited[ny][nx]) {
                isVisited[ny][nx] = 1;
                q.push([nx, ny, cnt + 1]);
            }
        }
    }
}

// const dfs = (x, y, i) => {
//     if (!isVisited[y][x]) {
//         mx = Math.max(mx, i);
//         if (i=== 12) console.table(isVisited)
//         isVisited[y][x] = i;
//         for (let [dx, dy] of dir) {
//             const nx = x + dx, ny = y + dy;
//             if (isValidPosition(nx, ny) && isVisited[ny][nx] === 0) {
//                 isVisited[ny][nx];
//                 dfs(nx, ny, i + 1);
//                 isVisited[ny][nx] = 0;
//             }
//         }
//         isVisited[y][x] = 0;
//     }
// }

for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
        if (data[y][x] === 'L') {
            bfs(x, y);
        }
    }
}
console.log(mx - 1);