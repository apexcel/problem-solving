---
문제번호: 1769
문제이름: '3의 배수'
주소: 'https://www.acmicpc.net/problem/1769'
분류: ['구현', '문자열', '재귀']
---

# 풀이

## 첫 번째 풀이

```js
const n = require('fs').readFileSync('/dev/stdin').toString().split('').reduce((sum, num) => sum + (+num), 0);

function solution(n) {
    let cnt = n > 9 ? 1 : 0, flag = true;
    const calc = (num) => {
        let sum = 0, quot = num;
        while (quot > 0) {
            sum += quot % 10;
            quot = Math.floor(quot / 10);
        }
        if (num !== sum && sum > 0) {
            cnt += 1;
            calc(sum);
        }
        else flag = sum % 3 === 0;
    }
    calc(n);
    console.log(`${cnt}\n${flag ? 'YES' : 'NO'}`);
}

solution(n);
```

## 두 번째 풀이

```js
const n = require('fs').readFileSync('/dev/stdin').toString().trim();
let sum = [...n.toString()], cnt = 0;
while (sum.length > 1) {
    sum = Array.prototype.reduce.call(sum, (acc, cur) => acc + (+cur), 0).toString();
    cnt += 1;
}
console.log(cnt);
console.log(+sum % 3 === 0 ? 'YES' : 'NO');
```