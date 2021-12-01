---
문제번호: 2565
문제이름: '전깃줄'
주소: 'https://www.acmicpc.net/problem/2565'
분류: ['다이나믹 프로그래밍']
---

# 풀이

A 전봇대를 기준으로 정렬한 뒤 B 전봇대의 최장증가부분수열(LIS)를 구하는 문제.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const wires = input.slice(1).map(v => v.split(' ').map(e => +e)).sort((a, b) => a[0] - b[0]);
const dp = Array(wires.length).fill(0);

for (let i = 0; i < wires.length; i += 1) {
    dp[i] = 1;
    for (let j = 0; j < i; j += 1) {
        if (wires[i][1] > wires[j][1] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
    }
}
console.log(wires.length - Math.max(...dp));
```