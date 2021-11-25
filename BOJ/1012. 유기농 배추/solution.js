const query = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
];

let qIdx = 1, sIdx = 2;
for (let i = 1; i <= +query[0]; i += 1) {
    const [m, n, k] = query[qIdx].split(' ').map(v => +v);
    const sliced = query.slice(sIdx, sIdx + k).map(v => v.split(' ').map(e => +e));
    qIdx = sIdx + k;
    sIdx = qIdx + 1;

    solution(m, n, sliced);
}

/**
 * 
 * @param {number} m 
 * @param {number} n 
 * @param {number[]} coords 
 */
function solution(m, n, coords) {
    const farm = Array.from(Array(n), () => Array(m).fill(0));
    let cnt = 0;

    for (let i = 0; i < coords.length; i += 1) {
        const [x, y] = coords[i];
        farm[y][x] = 1;
    }

    for (let y = 0; y < n; y += 1) {
        for (let x = 0; x < m; x += 1) {
            if (farm[y][x] === 1) {
                cnt += 1;
                bfs(farm, m, n, x, y);
            }
        }
    }

    console.log(cnt);
}

function dfs(farm, m, n, x, y) {
    if (farm[y][x] === 2 || farm[y][x] === 0) return;
    farm[y][x] = 2;

    for (let i = 0; i < 4; i += 1) {
        const [dx, dy] = dir[i];
        const cx = x + dx, cy = y + dy;

        if (cx >= 0 && cy >= 0 && cx < m && cy < n) {
            dfs(farm, m, n, cx, cy);
        }
    }
}

function bfs(farm, m, n, x, y) {
    farm[y][x] = 2;
    const q = [[x, y]];

    while (q.length) {
        const [xx, yy] = q.shift();

        for (let i = 0; i < 4; i += 1) {
            const [dx, dy] = dir[i];
            const cx = xx + dx, cy = yy + dy;

            if (cx >= 0 && cy >= 0 && cx < m && cy < n) {
                if (farm[cy][cx] === 2 || farm[cy][cx] === 0) continue;
                q.push([cx, cy]);
                farm[cy][cx] = 2;
            }
        }
    }
}