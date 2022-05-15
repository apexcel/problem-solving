---
문제번호: 2206
문제이름: '벽 부수고 이동하기'
주소: 'https://www.acmicpc.net/problem/2206'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색']
---

# 풀이

존나게 틀렸다... 그 이유는...

- 부수고 간 경로와 부수고 가지 않은 경로에 대해 조건 분기를 제대로 하지 못함.
- 어지간한 BFS는 JS배열 메서드 `shift()`써도 통과하는데 `shift()`가 느린 연산이라 이 문제의 경우 `shift()`쓰면 시간초과. 같은 로직으로 C++은 통과가 된다.
    - 직접 구현한 큐를 사용한다. 이게 제일 속 편함.
    - `shift()` 메서드를 쓰지 않고 배열 인덱스만 증가시켜서 값을 가져온다. 이 경우 메모리가 터질 수도 있음.
    - 어떤 사람은 stack 이용해서 풀었더라. 신기함.

## 첫 번째 풀이

2772ms

```js
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

const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const state = Array.from(Array(n), () => Array.from(Array(m), () => [0, 0]));
const moved = Array.from(Array(n), () => Array(m).fill(0));
const board = data.map(d => d.split('').map(Number));

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < n && x < m;

const isWall = (x, y) => board[y][x] === 1;

const bfs = (beginX, beginY) => {
    const q = new Queue();
    q.push([beginX, beginY, 1]);
    state[beginY][beginX] = [1, 1];
    moved[beginY][beginX] = 1;

    while (!q.isEmpty()) {
        const [x, y, canBreak] = q.pop();

        if (y === n - 1 && x === m - 1) {
            console.log(moved[y][x]);
            process.exit();
        }

        for (let [dx, dy] of dir) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny)) continue;

            // 벽인 경우, 벽을 부수지 않고 지금까지 온 경우
            if (isWall(nx, ny) && canBreak) {
                state[ny][nx][1] = 1;
                moved[ny][nx] = moved[y][x] + 1;
                q.push([nx, ny, 0]);
            }
            // 벽이 아닌 경우
            if (!isWall(nx, ny)) {
                if (canBreak && !state[ny][nx][0]) {
                    state[ny][nx][0] = 1;
                    moved[ny][nx] = moved[y][x] + 1;
                    q.push([nx, ny, 1]);
                }
                if (!canBreak && !state[ny][nx][1]) {
                    state[ny][nx][1] = 1;
                    moved[ny][nx] = moved[y][x] + 1;
                    q.push([nx, ny, 0]);
                }
            }
        }
    }
}

bfs(0, 0);
console.log(-1);
```

## 두 번째 풀이

1168ms

```js
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
            if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;

            // 다음 노드가 벽이고 지금까지 부순 적이 없고
            // 다른 경로가 부수고 이동한 노드로 방문하지 않았다면
            if (data[ny][nx] === '1' && !did && !state[1][ny][nx]) {
                state[1][ny][nx] = 1;
                q.push([nx, ny, 1, cnt + 1]);
            }
            // 다음 노드가 벽이 아니고 아직 방문 안했으면
            if (data[ny][nx] === '0' && !state[did][ny][nx]) {
                state[did][ny][nx] = 1;
                q.push([nx, ny, did, cnt + 1]);
            }
        }
    }
    return -1;
}
console.log(bfs(0, 0));
```