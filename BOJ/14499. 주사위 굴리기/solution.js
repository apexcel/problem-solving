const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m, by, bx, opCnt] = info.split(' ').map(Number);
const ops = data.pop().split(' ').map(op => parseInt(op) - 1);
const board = data.map(d => d.split(' ').map(Number));

// top, front, bottom, rear, left, right
const dice = [0, 0, 0, 0, 0, 0];

const dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < n && x < m;

const roll = (op) => {
    const [top, front, bottom, rear, left, right] = dice;
    switch (op) {
        case 0: {
            dice[0] = left;
            dice[5] = top;
            dice[2] = right;
            dice[4] = bottom;
            return;
        }
        case 1: {
            dice[0] = right;
            dice[5] = bottom;
            dice[2] = left;
            dice[4] = top;
            return;
        }
        case 2: {
            dice[0] = front;
            dice[1] = bottom;
            dice[2] = rear;
            dice[3] = top;
            return;
        }
        case 3: {
            dice[0] = rear;
            dice[1] = top;
            dice[2] = front;
            dice[3] = bottom;
            return;
        }
    }
}

let coords = [bx, by], res = '';
const operation = (x, y, op) => {
    const [dx, dy] = dir[op];
    const nx = x + dx, ny = y + dy;
    if (!isValidPosition(nx, ny)) return;
    roll(op);
    if (!board[ny][nx]) {
        board[ny][nx] = dice[2];
    }
    else {
        dice[2] = board[ny][nx];
        board[ny][nx] = 0;
    }
    coords = [nx, ny];
    res += dice[0] + '\n';
}

ops.forEach(op => operation(...coords, op));
console.log(res);