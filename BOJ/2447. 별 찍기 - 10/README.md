---
문제번호: 2447
문제이름: '별 찍기 - 10'
주소: 'https://www.acmicpc.net/problem/2447'
분류: ['분할 정복', '재귀']
---

# 풀이

## 첫 번째 풀이

1620ms

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
let star = '';

const print = (y, x, n) => {
    if (Math.floor(y / n) % 3 === 1 && Math.floor(x / n) % 3 === 1) return ' ';
    if (Math.floor(n / 3) === 0) return '*';
    return print(y, x, n / 3);
}

for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
        star += print(y, x, n);
    }
    star += '\n';
}

console.log(star);
```

## 두 번째 풀이

다른 사람 풀이

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const print2 = n => {
    if (n === 1) return ['*'];
    const prevStar = print2(n / 3);
    const top = prevStar.map(s => s.repeat(3));
    const mid = prevStar.map(s => s + ' '.repeat(s.length) + s);

    return [...top, ...mid, ...top];
};

console.log(print2(n).join('\n'));
```
