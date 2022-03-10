---
문제번호: 11724
문제이름: '연결 요소의 개수'
주소: 'https://www.acmicpc.net/problem/11724'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색', '깊이 우선 탐색']
---

# 풀이

## BFS

JS `shift()`로는 시간초과라서 큐 구현. 다른 사람 풀이를 보니 `splice()`를 사용해서 풀기도 함.

```js
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(val) {
        const node = new Node(val);
        if (!this.front) {
            this.front = this.back = node;
            return;
        }

        this.back.next = node;
        this.back = node;
    }

    dequeue() {
        if (this.front === this.back) this.back = null;
        const ret = this.front.val;
        this.front = this.front.next;
        return ret;
    }

    isEmpty() {
        return this.front === null && this.back === null;
    }
}

const [g, ...infos] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [v, e] = g.split(' ').map(Number);

const list = Array.from(Array(v + 1), () => []);
const isVisited = Array(v + 1).fill(0);

let cnt = 0;

for (let info of infos) {
    const [from, to] = info.split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
}

const bfs = begin => {
    const q = new Queue();
    q.enqueue(begin);

    while (!q.isEmpty()) {
        const cur = q.dequeue();
        if (isVisited[cur]) continue;
        isVisited[cur] = 1;
        list[cur].forEach(vtx => q.enqueue(vtx));
    }
};

for (let i = 1; i <= v; i += 1) {
    if (isVisited[i]) continue;
    bfs(i);
    cnt += 1;
}
console.log(cnt);
```

## DFS

```js
const [g, ...infos] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [v, e] = g.split(' ').map(Number);

const list = Array.from(Array(v + 1), () => []);
const isVisited = Array(v + 1).fill(0);

let cnt = 0;

for (let info of infos) {
    const [from, to] = info.split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
}

const dfs = x => {
    isVisited[x] = 1;

    for (let vtx of list[x]) {
        if (isVisited[vtx]) continue;
        dfs(vtx);
    }
}

for (let i = 1; i <= v; i += 1) {
    if (isVisited[i]) continue;
    dfs(i);
    cnt += 1;
}
console.log(cnt);
```