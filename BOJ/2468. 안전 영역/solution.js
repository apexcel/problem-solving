const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const size = parseInt(n);
let mn = 101, mx = -1, matrix;

const origin = data.map(d => d.split(' ').map(v => {
    const k = +v;
    if (k > mx) mx = k;
    if (k < mn) mn = k;
    return k;
}));

const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

const isValidCoordinates = (x, y) => x >= 0 && y >= 0 && x < size && y < size;

const isLarger = (level, x, y) => matrix[y][x] > level;

const dfs = (level, x, y) => {
    if (!isLarger(level, x, y)) {
        return;
    }
    matrix[y][x] = 0;
    
    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (isValidCoordinates(nx, ny) && isLarger(level, nx, ny)) {
            dfs(level, nx, ny);
        }
    }
}

const solution = () => {
    let maxSafetyZone = 1;
    for (let lv = mn; lv <= mx; lv += 1) {
        matrix = origin.map(d => d.slice());
        let cnt = 0;
        for (let y = 0; y < size; y += 1) {
            for (let x = 0; x < size; x += 1) {
                if (!isLarger(lv, x, y)) continue;
                dfs(lv, x, y);
                cnt += 1;
            }
        }
        if (maxSafetyZone < cnt) maxSafetyZone = cnt;
    }
    console.log(maxSafetyZone);
}

solution();