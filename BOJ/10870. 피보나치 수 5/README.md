---
문제번호: 10870
문제이름: '피보나치 수 5'
주소: 'https://www.acmicpc.net/problem/10870'
분류: ['수학', '구현', '다이나믹 프로그래밍']
---

# 풀이

사이즈가 작아서 배열로 놓고 풀이

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [0, 1, 1];
for (let i = 3; i <= 20; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[n]);
```


이전 풀이. 꼬리 재귀 최적화도 아니어서 dp가 나은듯.

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const fib = x => {
    if (x <= 1) return x;
    return fib(x - 2) + fib(x - 1);
};
console.log(fib(n));
```