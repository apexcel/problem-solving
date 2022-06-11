---
문제번호: 11725
문제이름: '트리의 부모 찾기'
주소: 'https://www.acmicpc.net/problem/11725'
분류: ['그래프 이론', '그래프 탐색', '트리', '너비 우선 탐색', '깊이 우선 탐색']
---

## 첫 번째 풀이

BFS

```js
const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const V = +n;
const graph = Array.from(Array(V + 1), () => []);

data.forEach(d => {
    const [src, dest] = d.split(' ').map(Number);
    graph[src].push(dest);
    graph[dest].push(src);
});

const BFS = (begin) => {
    const q = [begin];
    const visited = Array(V + 1).fill(0);
    visited[1] = 1;
    let head = 0;

    while (q[head]) {
        // q.shift() 사용하면 2배정도 느려짐
        // 이렇게 인덱스를 사용해서 하면 빨라지기는 하지만 GC가 안되서 메모리 많이 먹는다.
        // 가장 좋은 방법은 직접 Queue를 구현하는 것.
        const curr = q[head];
        head += 1;

        for (let node of graph[curr]) {
            if (!visited[node]) {
                visited[node] = curr;
                q.push(node);
            }
        }
    }
    
    let ret = '';
    for (let i = 2; i < visited.length; i += 1) {
        ret += visited[i] + '\n';
    }
    console.log(ret);
}

BFS(1);
```

## 두 번째 풀이

DFS

```js
const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const V = +n;
const graph = Array.from(Array(V + 1), () => []);

data.forEach(d => {
    const [src, dest] = d.split(' ').map(Number);
    graph[src].push(dest);
    graph[dest].push(src);
});

const visited = Array(V + 1).fill(0);

const DFS = (curr, parent) => {
    if (visited[curr]) return;
    visited[curr] = parent;

    for (let node of graph[curr]) {
        DFS(node, curr);
    }
}

DFS(1, 0);

console.log(visited.slice(2).join('\n'));
```