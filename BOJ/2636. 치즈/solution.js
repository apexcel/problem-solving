const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [h, w] = info.split(' ').map(Number);
const board = data.map(d => d.split(' ').map(Number));
// TODO: 개선할 수 있는 방법 찾아보기
const dir = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < h && x < w;

const isUnabledValue = (x, y) => board[y][x] > 1;

const dfs = (x, y) => {
    if (board[y][x] === 0) board[y][x] = 3;
    if (board[y][x] === 1) {
        board[y][x] = 2;
        return;
    }

    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (isValidPosition(nx, ny) && !isUnabledValue(nx, ny)) {
            dfs(nx, ny);
        }
    }
}

const convert = () => {
    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (isUnabledValue(x, y)) board[y][x] = 0;
        }
    }
}

let repeat = 0, cnt = 0;
const recursive = () => {
    if (board.some(b => b.includes(1))) {
        repeat += 1;
        cnt = board.reduce((acc, cur) => acc + cur.filter(v => v === 1).length, 0);
        dfs(0, 0);
        convert();
        recursive();
    }
}
recursive();

console.log(repeat);
console.log(cnt);
