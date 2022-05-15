---
문제번호: 5525
문제이름: 'IOIOI'
주소: 'https://www.acmicpc.net/problem/5525'
분류: ['문자열']
---

## 첫 번째 풀이

50 점

```js
const [n, m, s] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const fn = x => {
    let ret = 'I';
    for (let i = 0; i < x; i += 1) {
        ret += 'OI';
    }
    return ret;
}

const p = fn(n);
let cnt = 0;
for (let i = 0; i < m; i += 1) {
    let str = '';
    for (let j = 0; i + p.length <= m && j < p.length; j += 1) {
        str += s[i + j];
    }
    if (str === p) cnt += 1;
}
console.log(cnt);
```

## 두 번째 풀이

```js
const [n, m, s] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

let cnt = 0;
for (let i = 0; i < m; i += 1) {
    if (s[i] === 'O') continue;
    let p = 0;
    while (s[i + 1] === 'O' && s[i + 2] === 'I') {
        p += 1;
        i += 2;
        if (p == n) {
            p -= 1;
            cnt += 1;
        }
    }
}
console.log(cnt);
```