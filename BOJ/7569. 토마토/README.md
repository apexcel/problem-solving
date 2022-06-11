---
문제번호: 7569
문제이름: '토마토'
주소: 'https://www.acmicpc.net/problem/7569'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색']
---

## 풀이

- 몇 번의 메모리 초과를 받고 풀어냄. 주 원인은 큐에 넣기전 제대로 visited 체크를 하지 않은 것.
- 속도를 더 빨리 올리려면 큐 대신 `array[index++]`과 같이 큐와 비슷한 효과를 써서 풀이하면 된다.

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [c, r, h] = info.split(' ').map(Number);

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
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
    return ret.data;
  }

  push(data) {
    const node = new Node(data);
    !this.head ? this.head = node : this.tail.next = node;
    this.tail = node;
    this.size += 1;
  }

  isEmpty() {
    return !this.size;
  }
}

const q = new Queue();

const matrices = [];

for (let i = 0; i < h; i += 1) {
  const tmp = [];
  for (let j = 0; j < r; j += 1) {
    tmp.push(data[r * i + j].split(' ').map(Number));
  }
  matrices.push(tmp);
}

const isValidPosition = (x, y, l) => l >= 0 && y >= 0 && x >= 0 && l < h && y < r && x < c;

const isRaped = (x, y, l) => matrices[l][y][x] === 1;

const isUnRaped = (x, y, l) => matrices[l][y][x] === 0;

const dirs = [
  [0, -1, 0],
  [1, 0, 0],
  [0, 1, 0],
  [-1, 0, 0],
  [0, 0, -1],
  [0, 0, 1]
];

const visited = Array.from(Array(h), () => Array.from(Array(r), () => Array(c).fill(0)));

let mx = 0;

for (let l = 0; l < h; l += 1) {
  for (let y = 0; y < r; y += 1) {
    for (let x = 0; x < c; x += 1) {
      if (matrices[l][y][x] === 1) {
        visited[l][y][x] = 1;
        q.push([x, y, l, 1]);
      }
    }
  }
}

while (!q.isEmpty()) {
  const [x, y, l, d] = q.pop();

  for (const [dx, dy, dl] of dirs) {
    const nx = x + dx
      , ny = y + dy
      , nl = l + dl;

    if (!isValidPosition(nx, ny, nl) || visited[nl][ny][nx]) continue;
    visited[nl][ny][nx] = 1;

    if (matrices[nl][ny][nx] === -1 || isRaped(nx, ny, nl)) continue;
    if (isUnRaped(nx, ny, nl)) {
      mx = mx < d ? d : mx;
      matrices[nl][ny][nx] = 1;
      q.push([nx, ny, nl, d + 1]);
    }
  }
}

const noZero = matrices.every(mat => mat.every(m => m.every(bool => bool)));
console.log(noZero ? mx : -1);
```