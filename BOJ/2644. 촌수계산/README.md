---
문제번호: 2644
문제이름: '촌수계산'
주소: 'https://www.acmicpc.net/problem/2644'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색', '깊이 우선 탐색']
---

# 풀이

BFS

```js
const [n, t, m, ...v] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [t1, t2] = t.split(' ').map(Number);
const vertices = v.map(e => e.split(' ').map(Number));

const adjmat = Array.from(Array(+n + 1), () => Array(+n + 1).fill(0));

vertices.forEach(v => {
    const [from, to] = v;
    adjmat[from][to] = 1;
    adjmat[to][from] = 1;
});

const dfs = (begin) => {
    const isVisited = Array(+n + 1).fill(0);
    const q = [[begin, 0]];
    isVisited[begin] = 1;

    while (q.length) {
        const [b, c] = q.shift();

        if (b === t2) {
            console.log(c)
            return;
        }
        for (let i = 0; i <= +n; i += 1) {
            if (adjmat[b][i] && !isVisited[i]) {
                isVisited[i] = 1;
                q.push([i, c + 1]);
            }
        }
    }
    console.log(-1);
}

dfs(t1);
```

DFS

```js
const [n, t, m, ...v] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [t1, t2] = t.split(' ').map(Number);
const vertices = v.map(e => e.split(' ').map(Number));

const size = +n + 1;
const adjmat = Array.from(Array(size), () => Array(size).fill(0));

vertices.forEach(v => {
    const [from, to] = v;
    adjmat[from][to] = 1;
    adjmat[to][from] = 1;
});

const isVisited = Array(size).fill(0);
let res;

const dfs = (begin, cnt) => {
    if (begin === t2) {
        res = cnt;
        return;
    }
    for (let i = 1; i < size; i += 1) {
        if (adjmat[i][begin] && !isVisited[i]) {
            isVisited[i] = 1;
            dfs(i, cnt + 1);
        }
    }
    return;
}

dfs(t1, 0);
console.log(res ? res : -1);
```