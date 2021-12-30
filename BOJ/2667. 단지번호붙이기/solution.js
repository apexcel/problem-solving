const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = +input[0];
const village = input.slice(1).map(v => v.split('').map(Number));

const counter = Array(n * n).fill(0);
const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
];

let cnt = 1;
const solution = (cx, cy) => {
    cnt += 1;
    const q = [[cx, cy]];
    while (q.length) {
        const [x, y] = q.shift();
        if (village[y][x] !== 1) continue;

        counter[cnt] += 1;
        village[y][x] = cnt;

        for (let i = 0; i < 4; i += 1) {
            const [dx, dy] = dir[i];
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= n || ny >= n || village[ny][nx] !== 1) continue;
            q.push([nx, ny]);
        }
    }
}

for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
        if (village[y][x] === 1) solution(x, y);
    }
}

console.log(cnt - 1);
console.log(counter.slice(1).filter(v => v > 0).sort((a, b) => a - b).join('\n'));