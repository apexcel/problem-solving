---
문제번호: 12852
문제이름: '1로 만들기 2'
주소: 'https://www.acmicpc.net/problem/12852'
분류: ['다이나믹 프로그래밍', '그래프 이론', '그래프 탐색']
---

# BFS 풀이

## 첫 번째 풀이

```js
const n = +require('fs').readFileSync('./data.in').toString().trim();
const fns = [
    x => x % 3 ? x : x / 3,
    x => x % 2 ? x : x / 2,
    x => x - 1
];

const q = [[n, 0]];
const visited = Array(1e6 + 1);

visited[n] = [-1, 0];

const getPath = () => {
    const path = [1];
    let next = 1;
    while (visited[next] && visited[next][0] !== -1) {
        next = visited[next][0];
        path.push(next);
    }
    return path.reverse();
}

while (q.length) {
    const [x, cnt] = q.shift()
    if (x === 1) {
        const path = getPath();
        console.log(path.length - 1);
        console.log(path.join(' '));
        process.exit(0);
    }
    for (let i = 0; i < 3; i += 1) {
        const nx = fns[i](x);
        if (visited[nx] && visited[nx][1] < cnt + 1) continue;
        visited[nx] = [x, cnt + 1];
        q.push([nx, cnt + 1]);
    }
}
```