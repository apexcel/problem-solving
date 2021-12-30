const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [w, h] = input[0].split(' ').map(Number);
const box = input.slice(1).map(v => v.split(' '));

class Queue {
    constructor() {
        this.q = [];
        this.head = 0;
        this.cur = 0;
    }

    pop() {
        return this.q[this.head++];
    }

    push(item) {
        this.q[this.cur++] = item;
    }

    isEmpty() {
        return this.head >= this.q.length;
    }
}

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
];

const board = Array.from(Array(h), () => Array(w)), q = new Queue();
for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
        board[y][x] = +box[y][x];
        if (board[y][x] === 1) q.push([x, y, 1]);
    }
}

const solution = () => {
    while (!q.isEmpty()) {
        const [x, y, d] = q.pop();

        for (let i = 0; i < 4; i += 1) {
            const [dx, dy] = dir[i];
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= w || ny >= h || board[ny][nx] !== 0) continue;
            board[ny][nx] = d + 1;
            q.push([nx, ny, d + 1]);
        }
    }

    let day = 1;
    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (board[y][x] === 0) return -1;
            if (day < board[y][x]) day = board[y][x];
        }
    }
    return day === -1 ? -1 : day - 1;
};

console.log(solution());