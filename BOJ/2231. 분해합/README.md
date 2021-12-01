---
문제번호: 2231
문제이름: '분해합'
주소: 'https://www.acmicpc.net/problem/2231'
분류: ['브루트포스 알고리즘']
---

# 풀이

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
let min = 987654321;
for (let num = n; num > 0; num -= 1) {
    const v = f(num);
    if (v === n && num < min) min = num;
}

function f(m) {
    let res = m;
    while (m > 0) {
        res += m % 10;
        m = Math.floor(m / 10);
    }
    return res;
}

console.log(min === 987654321 ? 0 : min);
```