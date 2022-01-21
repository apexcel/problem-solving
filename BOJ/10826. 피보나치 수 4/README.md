---
문제번호: 10826
문제이름: '피보나치 수 4'
주소: 'https://www.acmicpc.net/problem/10826'
분류: ['다이나믹 프로그래밍', '임의 정밀도 / 큰 수 연산']
---

# 풀이

## 첫 번째 풀이

무지성 `BigInt`

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [0n, 1n];
for (let i = 2; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[n].toString());
```

## 두 번째 풀이

문자열을 이용한 큰 수 더하기, 백준 10757번과 유사