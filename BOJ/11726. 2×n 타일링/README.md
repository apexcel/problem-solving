---
문제번호: 11726
문제이름: '2×n 타일링'
주소: 'https://www.acmicpc.net/problem/11726'
분류: ['다이나믹 프로그래밍']
---

# 풀이

1x2와 2x1 타일으로 2xn 블록을 채워나가는 것이 문제의 목적이다. 2x1의 경우 2x1 타일을 두 개 사용해서 2x2로 만들어 사용해야 하므로 1x2와 2x2 두 개의 타일을 이용해서 2xn의 블록을 채우는 것과 동일하다. 이 때 어떤 타일을 먼저 놓느냐가 중요하므로 1x2 타일을 먼저 놓은 경우와 2x1 타일을 두 개 놓은 경우를 `dp` 배열에 저장해서 현재까지 채운 블록을 저장한다.

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = Array(1001).fill(0);
const tiling = n => {
    if (n <= 1) return 1;
    if (dp[n]) return dp[n];
    return dp[n] = (tiling(n - 2) + tiling(n - 1)) % 10007;
};
console.log(tiling(n));
```

예컨대 `n`이 3인 경우 2x1을 타일 두 개 사용해서 남은 블록의 경우와 1x2 타일을 하나 사용해서 남은 블록이 있다. 2x1 타일 두 개를 사용한 경우가 `tiling(n - 2)` 이고 남은 블록은 1이므로 1x2 타일을 한 개를 사용해서 채울 수 있다.
1x2 타일을 하나 사용한 경우 `tiling(n - 1)`의 경우로 남은 블록은 2만큼의 크기를 갖고 이 경우 1x2 타일을 두 개 쓰거나 2x1 타일 두개를 쓰는 방법으로 나뉜다. 따라서 `dp[n]`은 이전에 꽉 채운 블록들의 경우의 수들을 모두 더한 값이 된다.