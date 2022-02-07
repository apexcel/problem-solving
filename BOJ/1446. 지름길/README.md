---
문제번호: 1446
문제이름: '지름길'
주소: 'https://www.acmicpc.net/problem/1446'
분류: ['다이나믹 프로그래밍', '그래프 이론', '다익스트라']
---

# 풀이

1. 현재 지점의 값은 `현재 지점의 값`과 `이전 값 + 1` 중 더 작은 것을 선택.
2. 현재 지점에서 지름길이 존재하는 경우 아래와 같다면 무시한다.
    - 지름길 도착 지점이 목적지 보다 큰 경우
    - 지름길을 사용하지 않는 것이 더 나은 경우
3. 지름길의 도착 지점의 값을 `지름길을 이용하지 않는 경우의 값`과 `현재 지점 + 지름길을 통해 간 경우의 값`과 비교하여 더 작은 것을 고른다.

```js
const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, d] = info.split(' ').map(Number);
const dp = Array(d + 1).fill(1).map((_, i) => i);
const map = new Map();

data.forEach(d => {
    const [from, to, dist] = d.split(' ').map(Number);
    map.has(from) ? map.set(from, [...map.get(from), [to, dist]]) : map.set(from, [[to, dist]]);
})

for (let i = 0; i <= d; i += 1) {
    if (i > 0) dp[i] = Math.min(dp[i], dp[i - 1] + 1);
    if (map.has(i)) {
        const items = map.get(i);
        for (let j = 0; j < items.length; j += 1) {
            const [to, dist] = items[j];
            if (to > d || to - i < dist) continue;
            dp[to] = Math.min(dp[to], dp[i] + dist);
        }
    }
}
console.log(dp[d]);
```