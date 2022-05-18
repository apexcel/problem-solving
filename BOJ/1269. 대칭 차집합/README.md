---
문제번호: 1269
문제이름: '대칭 차집합'
주소: 'https://www.acmicpc.net/problem/1269'
분류: ['자료 구조', '해시를 사용한 집합과 맵', '트리를 사용한 집합과 맵']
---

## 첫 번째 풀이

시간 초과.

```js
const [_, A, B] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const setA = A.split(' ').map(Number);
const setB = B.split(' ').map(Number);

const difference = (a, b) => a.filter(v => !b.includes(v));

console.log(difference(setA, setB).length + difference(setB, setA).length)
```

## 두 번째 풀이

Set 자료 구조 사용

```js
const [_, A, B] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const setA = new Set(A.split(' ').map(Number));
const setB = new Set(B.split(' ').map(Number));
let cnt = 0;

setA.forEach(v => cnt += !setB.has(v) ? 1 : 0);
setB.forEach(v => cnt += !setA.has(v) ? 1 : 0);

console.log(cnt);
```

## 세 번째 풀이

1. 중복되는 원소들로 이루어진 전체 집합의 크기에서 중복 되지 않는 원소들로 이루어진 집합의 크기를 뺀다.
2. 집합 A와 집합 B 각각 해당 크기만큼 빼준다.

```js
const [_, A, B] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const a = A.split(' '), b = B.split(' ');
const set = new Set([...a, ...b]);
const sizeA = a.length, sizeB = b.length;
const both = sizeA + sizeB - set.size;
console.log(sizeA + sizeB - (2 * both));
```