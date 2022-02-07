---
문제번호: 12865
문제이름: '평범한 배낭'
주소: 'https://www.acmicpc.net/problem/12865'
분류: ['다이나믹 프로그래밍', '배낭 문제']
---

# 풀이

0-1 배낭 문제

## 첫 번째 풀이

```js
const [info, ...rest] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
const items = rest.map(item => item.split(' ').map(Number));
const dp = Array.from(Array(k + 1), () => Array(n).fill(0));

const knapsack = (capacity, item) => {
    if (item === n) return 0;
    if (dp[capacity][item]) return dp[capacity][item];
    const [w, v] = items[item];

    dp[capacity][item] = knapsack(capacity, item + 1);
    if (capacity >= w) {
        dp[capacity][item] = Math.max(dp[capacity][item], knapsack(capacity - w, item + 1) + v);
    }
    return dp[capacity][item];
}
console.log(knapsack(k, 0));
```

## 두 번째 풀이

다른 사람 풀이 참고

```js
const [info, ...rest] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
const items = rest.map(item => item.split(' ').map(Number));

const dp = Array(k + 1).fill(0);
items.forEach(([w, v]) => {
    for (let i = k; i >= w; i -= 1) {
        dp[i] = Math.max(dp[i], dp[i - w] + v);
    }
})
console.log(dp[k]);
```