---
문제번호: 16928
문제이름: '뱀과 사다리 게임'
주소: 'https://www.acmicpc.net/problem/16928'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색']
---

## 풀이

- 한 번 방문한 곳은 방문처리 해주어야 한다.
- 주사위 굴리는 경우를 `for 1 to 6`를 반복하는 것이라고 떠올리는 게 어려웠다.

```js
const [_, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
// 사다리 or 뱀이 담긴 위치
const map = new Map();
data.forEach(d => {
    const [src, dest] = d.split(' ').map(Number);
    map.set(src, dest);
});

const BFS = (begin) => {
    const q = [[begin, 0]]
    const visited = Array(101).fill(0);
    visited[begin] = 1;

    while (q.length) {
        // 현재 위치, 주사위 굴린 횟수
        const [curr, cnt] = q.shift();

        if (curr === 100) {
            console.log(cnt);
            return;
        }

        // 주사위를 굴리는 경우
        for (let i = 1; i <= 6; i += 1) {
            // 다음 위치
            let next = curr + i;
            // 값이 100을 넘기거나 이미 방문했던 곳이면 무시
            if (next > 100 || visited[next]) continue;
            // 사다리 or 뱀이라면 그 위치로 이동
            if (map.has(next)) next = map.get(next);
            visited[next] = 1;
            q.push([next, cnt + 1]);
        }
    }
}

BFS(1);
```