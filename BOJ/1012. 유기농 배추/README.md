---
문제번호: 1012
문제이름: '유기농 배추'
주소: 'https://www.acmicpc.net/problem/1012'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색,' '깊이 우선 탐색']
---

# 풀이

DFS와 BFS로 풀 수 있다. 중요한 것은 인접한 배추의 영역을 잘 탐지하는 것. `0`과 `1`로 구성되어 있으므로 방문한 지점은 `2`로 표기했다.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
];

let qIdx = 1, sIdx = 2;
for (let i = 1; i <= +query[0]; i += 1) {
    const [m, n, k] = query[qIdx].split(' ').map(v => +v);
    const sliced = query.slice(sIdx, sIdx + k).map(v => v.split(' ').map(e => +e));
    qIdx = sIdx + k;
    sIdx = qIdx + 1;

    solution(m, n, sliced);
}

function solution(m, n, coords) {
    const farm = Array.from(Array(n), () => Array(m).fill(0));
    let cnt = 0;

    for (let i = 0; i < coords.length; i += 1) {
        const [x, y] = coords[i];
        farm[y][x] = 1;
    }

    for (let y = 0; y < n; y += 1) {
        for (let x = 0; x < m; x += 1) {
            if (farm[y][x] === 1) {
                cnt += 1;
                // bfs(farm, m, n, x, y) || dfs(farm, m, n, x, y);
            }
        }
    }

    console.log(cnt)
}
```


## DFS

```js
function dfs(farm, m, n, x, y) {
    if (farm[y][x] === 2 || farm[y][x] === 0) return;
    farm[y][x] = 2;

    for (let i = 0; i < 4; i += 1) {
        const [dx, dy] = dir[i];
        const cx = x + dx, cy = y + dy;

        if (cx >= 0 && cy >= 0 && cx < m && cy < n) {
            dfs(farm, m, n, cx, cy);
        }
    }
}
```

## BFS

```js
function bfs(farm, m, n, x, y) {
    farm[y][x] = 2;
    const q = [[x, y]];

    while (q.length) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i += 1) {
            const [dx, dy] = dir[i];
            const cx = x + dx, cy = y + dy;

            if (cx >= 0 && cy >= 0 && cx < m && cy < n) {
                if (farm[cy][cx] === 2 || farm[cy][cx] === 0) continue;
                q.push([cx, cy]);
                farm[cy][cx] = 2;
            }
        }
    }
}
```