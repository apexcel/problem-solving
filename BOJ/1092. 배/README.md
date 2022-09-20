---
문제번호: 1092
문제이름: '배'
주소: 'https://www.acmicpc.net/problem/1092'
분류: ['정렬', '그리디 알고리즘']
---

# 첫 번째 풀이

브루트포스로 풀이. 3812ms

```js
const [n, a, m, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const crains = a.split(' ').map(Number).sort((a, b) => b - a);
const cargos = b.split(' ').map(Number).sort((a, b) => b - a);
let left = +m, cnt = 0;

if (cargos[0] > crains[0]) {
    console.log(-1);
    process.exit();
}

while (left) {
    for (let i = 0; i < crains.length; i += 1) {
        for (let j = 0; j < cargos.length; j += 1) {
            if (cargos[j] === -1) continue;
            if (cargos[j] <= crains[i]) {
                cargos[j] = -1;
                left -= 1;
                break;
            }
        }
    }
    cnt += 1;
}

console.log(cnt);
```

# 두 번째 풀이