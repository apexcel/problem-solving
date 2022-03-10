---
문제번호: 2669
문제이름: '직사각형 네개의 합집합의 면적 구하기'
주소: 'https://www.acmicpc.net/problem/2669'
분류: ['구현']
---

# 풀이

## 첫 번째 풀이

```js
const coords = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const board = Array.from(Array(101), () => Array(101).fill(0));
let cnt = 0;
const check = (xb, yb, xe, ye) => {
    for (let y = yb; y < ye; y += 1) {
        for (let x = xb; x < xe; x += 1) {
            if (!board[y][x]) {
                board[y][x] = 1;
                cnt += 1;
            }
        }
    }
}

coords.forEach(c => check(...c.split(' ').map(Number)));

console.log(cnt);
```