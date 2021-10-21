---
문제번호: 4673
문제이름: '셀프 넘버'
주소: 'https://www.acmicpc.net/problem/4673'
분류: ['수학', '구현']
---

# 풀이

## 첫 번째 풀이

```js
const res = [];
for (let i = 1; i <= 10000; i += 1) {
    let flag = true;
    for (let j = 1; j <= i; j += 1) {
        let quot = j, d = j;

        while (quot > 0) {
            d += quot % 10;
            quot = Math.floor(quot / 10);
        }
        if (d === i) {
            flag = true;
            break;
        }
        else {
            flag = false;
        }
    }
    if (!flag) res.push(i);
}
```

무지성으로 구현한 결과 `performance.measure()`로 측정시 약 1300ms가 나온다.

## 두 번째 풀이

```js
const isSelfNumber = Array(10001).fill(1);
let str = '';

function d(n) {
    let quot = n, res = n;
    while (quot > 0) {
        res += Math.floor(quot % 10);
        quot /= 10;
    }
    return res;
}

for (let i = 1; i <= 10000; i += 1) {
    isSelfNumber[d(i)] = 0;
}

for (let i = 1; i < isSelfNumber.length; i += 1) {
    if (isSelfNumber[i]) {
        str += i + '\n';
    }
}
```

측정 결과 약 90ms가 나온다.