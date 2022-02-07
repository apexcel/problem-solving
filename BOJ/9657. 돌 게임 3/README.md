---
문제번호: 9657
문제이름: '돌 게임 3'
주소: 'https://www.acmicpc.net/problem/9657'
분류: ['다이나믹 프로그래밍', '게임 이론']
---

# 풀이

1. 1, 3, 4, 5개 남았을 때 상근이 이김.
2. 2개 남았을 때 창영이 이김.

`true`가 상근, `false`가 창영이의 턴이라고 할때 `dp[i]`가 `true`라면 i개의 돌이 남았을 때 상근이의 턴이라는 뜻이므로 상근이 이기고 `false`면 창영이 이긴다.

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [true, true, false, true, true];

for (let i = 5; i <= n; i += 1) {
    dp[i] = false;
    if (dp[i - 4] === false || dp[i - 3] === false || dp[i - 1] === false) dp[i] = true;
}

console.log(dp[n] ? 'SK' : 'CY');
```