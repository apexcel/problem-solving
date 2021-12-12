---
문제번호: 2839
문제이름: '설탕 배달'
주소: 'https://www.acmicpc.net/problem/2839'
분류: ['수학', '다이나믹 프로그래밍', '그리디 알고리즘']
---

# 풀이

대표적인 그리디 문제. DP로도 풀 수 있다.

```js
let n = +require('fs').readFileSync('/dev/stdin').toString(), cnt = 0;
while (n % 5) {
    n -= 3;
    cnt += 1;
}
console.log(n < 0 ? -1 : cnt + (n / 5));
```

`n`이 5로 나누어질 때까지 `n`에서 3을 계속 뺀다. 5로 나누어 떨어지게 되면 5로 나눈 몫에 3을 뺀 횟수를 더한다. 음수가 되면 불가능이므로 `-1`을 출력한다. 