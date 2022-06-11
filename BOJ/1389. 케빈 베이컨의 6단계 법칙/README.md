---
문제번호: 1389
문제이름: '케빈 베이컨의 6단계 법칙'
주소: 'https://www.acmicpc.net/problem/1389'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색', '플로이드-와샬']
---

## 첫 번째 풀이

플로이드-와샬

```js
const data = require('fs').readFileSync('./data.in').toString().trim().split('\n').map(d => d.split(' ').map(Number));
const [V, E] = data[0];
const INF = 987654321;
const adjMat = Array.from(Array(V + 1), () => Array(V + 1).fill(INF));
// 초기화 1
for (let i = 1; i <= V; i += 1) {
    adjMat[i][i] = 0;
}
// 초기화 2
for (let i = 1; i < data.length; i += 1) {
    const [a, b] = data[i];
    adjMat[a][b] = adjMat[b][a] = 1;
}

for (let k = 1; k <= V; k += 1) {
    for (let i = 1; i <= V; i += 1) {
        for (let j = 1; j <= V; j += 1) {
            adjMat[i][j] = Math.min(adjMat[i][j], adjMat[i][k] + adjMat[k][j]);
        }
    }
}

let mn = INF, idx = 1;
for (let i = 1; i <= V; i += 1) {
    let sum = 0;
    for (let j = 1; j <= V; j += 1) {
        sum += adjMat[i][j];
    }
    if (mn > sum) {
        mn = sum;
        idx = i;
    }
}
console.log(idx);
```

## 두 번째 풀이

BFS

```js
const data = require('fs').readFileSync('./data.in').toString().trim().split('\n').map(d => d.split(' ').map(Number));
const [V, E] = data[0];
const graph = Array.from(Array(V + 1), () => []);

for (let i = 1; i < data.length; i += 1) {
    const [src, dest] = data[i];
    graph[src].push(dest);
    graph[dest].push(src);
}

const BFS = (begin) => {
    const q = [[begin, 0]];
    const visited = Array(V + 1).fill(0);
    visited[begin] = -1;

    while (q.length) {
        const [curr, cnt] = q.shift();

        for (let node of graph[curr]) {
            if (visited[node]) continue;
            visited[node] = cnt + 1;
            q.push([node, cnt + 1]);
        }
    }
    const ret = visited.reduce((sum, cur) => sum + cur, 1);
    return ret;
}

let mn = 987654321, idx = 1;
for (let i = 1; i <= V; i += 1) {
    const sum = BFS(i);
    if (mn > sum) {
        mn = sum;
        idx = i;
    }
}
console.log(idx);
```