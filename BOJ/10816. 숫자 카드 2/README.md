---
문제번호: 10816
문제이름: '숫자 카드 2'
주소: 'https://www.acmicpc.net/problem/10816'
분류: ['자료구조', '정렬', '이분 탐색']
---

# 풀이

## 첫 번째 풀이

Map 자료 구조 썼음.

```js
const [n, c1, m, c2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const map = new Map();
c1.split(' ').forEach(ch => map.set(ch, map.get(ch) + 1 || 1));
const result = c2.split(' ').reduce((acc, cur) => {
    acc.push(map.get(cur) ? map.get(cur) : 0);
    return acc;
}, []).join(' ');
console.log(result);
```

## 두 번째 풀이

숫자 카드들을 정렬하고 임의의 $x$에 대해 $upper bound(x) - lower bound(x)$를 하게 되면 카드의 개수를 셀 수 있다. 그러나 카드가 2장일 경우 0이 되므로 해당 부분에 관해 예외 처리를 해주면 된다.