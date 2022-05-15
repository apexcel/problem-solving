const [n, k, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const SIZE = +n;
const board = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
const ops = new Map();

data.slice(0, k).forEach(d => {
    const [y, x] = d.split(' ').map(Number);
    board[y - 1][x - 1] = 1;
});
data.slice(+k + 1).map(d => {
    const [time, op] = d.split(' ');
    ops.set(+time, op === 'L' ? 3 : 1);
})

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < SIZE && x < SIZE;

const isAcross = (snake, x, y) => snake.findIndex(([sx, sy]) => sx === x && sy === y) > -1;

const move = (snake, look) => {
    const [dx, dy] = dir[look]
        , [x, y] = snake.at(-1)
        , nx = x + dx, ny = y + dy
        , tail = snake[0];

    if (!isValidPosition(nx, ny) || isAcross(snake, nx, ny)) return false;
    snake.push([nx, ny]);
    board[ny][nx] ? board[ny][nx] = 0 : snake.shift();
    return true;
}

const snake = [[0, 0]];
let time = 0, look = 1;
let go = true;
while (go) {
    if (ops.has(time)) look = (look + ops.get(time)) % 4;
    go = move(snake, look);
    time += 1;
}
console.log(time);