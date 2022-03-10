---
문제번호: 2628
문제이름: '종이자르기'
주소: 'https://www.acmicpc.net/problem/2628'
분류: ['정렬']
---

# 풀이

## 첫 번째 풀이

주어진대로 구현.

```js
const [base, n, ...points] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [w, h] = base.split(' ').map(Number);
let coords = [[0, 0, w, h]];

const measure = (base, pos1, pos2) => base > pos1 && base < pos2;

const sorter = (type, pos, coords) => {
    const [x1, y1, x2, y2] = coords;
    if (!type && measure(pos, y1, y2)) {
        return [
            [x1, y1, x2, pos],
            [x1, pos, x2, y2]
        ];
    }
    if (type && measure(pos, x1, x2)) {
        return [
            [x1, y1, pos, y2],
            [pos, y1, x2, y2]
        ];
    }
    return [coords];
}

for (let i = 0; i < +n; i += 1) {
    const [type, pos] = points[i].split(' ');
    let tmp = []

    for (let j = 0; j < coords.length; j += 1) {
        tmp.push(...sorter(+type, +pos, coords[j]))
    }

    coords = tmp;
}

let mx = -1;
for (let i = 0; i < coords.length; i += 1) {
    const [x1, y1, x2, y2] = coords[i];
    mx = Math.max(mx, (x2 - x1) * (y2 - y1));
}
console.log(mx);
```

## 두 번째 풀이

정렬 문제인 이유

```js
const [base, n, ...points] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [ex, ey] = base.split(' ').map(Number);

const x = [0, ex];
const y = [0, ey];

for (let i = 0; i < +n; i += 1) {
    const [type, pos] = points[i].split(' ').map(Number);
    type ? x.push(pos) : y.push(pos);
}

x.sort((a, b) => b - a);
y.sort((a, b) => b - a);

let mx = 0;
for (let i = 1; i < y.length; i += 1) {
    const h = y[i] - y[i - 1];
    for (let j = 1; j < x.length; j += 1) {
        const w = x[j] - x[j - 1];
        mx = Math.max(mx, h * w);
    }
}
console.log(mx);
```