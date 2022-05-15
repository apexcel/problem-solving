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
        !this.head ? this.head = node : this.tail.next = node;
        this.tail = node;
        this.size += 1;
    }

    pop() {
        const ret = this.head;
        if (this.size === 0) {
            this.head = null;
            this.tail = null;
            return;
        }
        if (this.size === 1) {
            this.tail = null;
        }
        this.head = this.head.next;
        this.size -= 1;
        return ret.value;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);

const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

const state = Array.from(Array(2), () => Array.from(Array(n), () => Array(m).fill(0)));

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < n && x < m;

const isWall = (x, y) => data[y][x] === '1';

const bfs = (bx, by) => {
    const q = new Queue();
    q.push([bx, by, 0, 1]);
    state[0][by][bx] = 1;
    state[1][by][bx] = 1;
    
    while (!q.isEmpty()) {
        const [x, y, did, cnt] = q.pop();

        if (y === n - 1 && x === m - 1) return cnt;

        for (let [dx, dy] of dir) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny)) continue;

            // 다음 노드가 벽이고 지금까지 부순 적이 없고
            // 다른 경로가 부수고 이동한 노드로 방문하지 않았다면
            if (isWall(nx, ny) && !did && !state[1][ny][nx]) {
                state[1][ny][nx] = 1;
                q.push([nx, ny, 1, cnt + 1]);
            }
            // 다음 노드가 벽이 아니고 아직 방문 안했으면
            if (!isWall(nx, ny) && !state[did][ny][nx]) {
                state[did][ny][nx] = 1;
                q.push([nx, ny, did, cnt + 1]);
            }
        }
    }
    return -1;
}
console.log(bfs(0, 0));