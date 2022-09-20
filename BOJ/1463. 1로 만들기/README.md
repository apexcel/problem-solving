---
문제번호: 1463
문제이름: '1로 만들기'
주소: 'https://www.acmicpc.net/problem/1463'
분류: ['다이나믹 프로그래밍']
---

# 첫 번째 풀이

21년 풀이, DP

```js
const sc = Number(require('fs').readFileSync('/dev/stdin').toString());
let cache = Array(1000001).fill(0);

for (let i = 2; i <= sc; i += 1) {
    cache[i] = cache[i - 1] + 1;
    if (!(i % 3)) {
        cache[i] = Math.min(cache[i], cache[i / 3] + 1);
    }
    if (!(i % 2)) {
        cache[i] = Math.min(cache[i], cache[i / 2] + 1);
    }
}
 
console.log(cache[sc]);
```

# 두 번째 풀이

22년 풀이, BFS

```js
const n = +require('fs').readFileSync('/dev/stdin').toString().trim();
const visited = Array(1e6 + 1).fill(0);
const dirs = [1, 2, 3];
const q = [1];
let head = 0;

while (head < q.length) {
    const x = q[head++];

    if (x === n) {
        console.log(visited[x]);
        process.exit(0);
    }

    for (const dx of dirs) {
        const nx = dx === 1 ? x + 1 : x * dx;
        if (nx > n || visited[nx]) continue;
        visited[nx] = visited[x] + 1;
        q.push(nx);
    }
}
```