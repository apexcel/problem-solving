class QueueNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        const node = new QueueNode(val);
        this.size += 1;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    pop() {
        const ret = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        if (this.isEmpty()) this.tail = null;
        return ret;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const dir = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
];

const countIsle = (board, beginX, beginY, w, h) => {
    const q = new Queue();
    q.push([beginX, beginY]);

    while (!q.isEmpty()) {
        const [x, y] = q.pop();

        for (let [dx, dy] of dir) {
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= w || ny >= h || board[ny][nx] !== 1) continue;
            board[ny][nx] = 2;
            q.push([nx, ny]);
        }
    }
};

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = '';

while (input.length > 1) {
    const [w, h] = input.shift().split(' ').map(Number);
    const board = input.splice(0, h).map(v => v.split(' ').map(Number));
    let cnt = 0;

    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (board[y][x] === 1) {
                countIsle(board, x, y, w, h);
                cnt += 1;
            }
        }
    }

    res += cnt + '\n';
}

console.log(res);