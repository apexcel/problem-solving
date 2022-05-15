const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [h, w, k] = info.split(' ').map(Number);

const visited = Array.from(Array(h), () => Array(w).fill(0));

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

data.forEach(d => {
    const [x1, y1, x2, y2] = d.split(' ').map(Number);
    for (let y = y1; y < y2; y += 1) {
        for (let x = x1; x < x2; x += 1) {
            visited[y][x] = 2;
        }
    }
});


const BFS = (bx, by) => {
    const q = [[bx, by]];
    let ret = 1;
    visited[by][bx] = 1;

    while (q.length) {
        const [x, y] = q.shift();
        for (let [dx, dy] of dir) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny) || visited[ny][nx] > 0) continue;
            visited[ny][nx] = 1;
            ret += 1;
            q.push([nx, ny]);
        }
    }

    return ret;
}

const sizes = [];
for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
        if (!visited[y][x]) {
            const cnt = BFS(x, y);
            sizes.push(cnt);
        }
    }
}

console.log(sizes.length);
console.log(sizes.sort((a, b) => a - b).join(' '));