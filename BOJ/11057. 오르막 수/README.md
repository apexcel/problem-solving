---
문제번호: 11057
문제이름: '오르막 수'
주소: 'https://www.acmicpc.net/problem/11057'
분류: ['다이나믹 프로그래밍']
---

# 풀이

규칙 찾아서 풀이. 초기 `dp` 배열에서 시작해서 해당 인덱스의 새로운 원소의 값은 `현재 원소 + 이전 원소`이다. 

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < n; i += 1) {
    for (let j = 1; j < 10; j += 1) {
        dp[j] = (dp[j] % 10007) + (dp[j - 1] % 10007);
    }
}
console.log(dp[9] % 10007);
```

## 다른 사람 풀이

```c++
#include <cstdio>
int main() {
    int n, ans = 1;
    scanf("%d", &n);
    for (int i = 1; i <= 9; ++i)
        ans = ans * (n + i) % 10007;
    printf("%d", ans * 6995 % 10007);
    return 0;
}
```

문제의 답이 이항계수(n + 9, 9)이며 6995는 9!의 mod 10007에 대한 곱셈의 역원이다. ((9! % 10007) * 6995) % 10007 = 1