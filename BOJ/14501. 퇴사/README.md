---
문제번호: 14501
문제이름: '퇴사'
주소: 'https://www.acmicpc.net/problem/14501'
분류: ['다이나믹 프로그래밍', '브루트포스 알고리즘']
---

# 풀이

기본적으로 현재 값은 이전 값과 현재 값 중 더 큰 것을 택하며, `n`을 초과하지 않는 경우 스케줄이 끝나는 날에 해당하는 인덱스에 `존재하는 값`과 현재 인덱스에 `존재하는 값 + p` 둘 중 더 큰 것을 택한다.  

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +(input.shift());
const dp = Array(n + 1).fill(0);
let mx = -1;
for (let i = 0; i < n; i += 1) {
    const [t, p] = input[i].trim().split(' ').map(Number);
    if (i + t <= n) dp[i + t] = Math.max(dp[i + t], dp[i] + p);
    dp[i + 1] = Math.max(dp[i + 1], dp[i]);
    mx = Math.max(mx, dp[i + 1]);
};
console.log(mx);
```