---
문제번호: 1074
문제이름: 'Z'
주소: 'https://www.acmicpc.net/problem/1074'
분류: ['분할 정복', '재귀']
---

## 첫 번째 풀이

시간 초과

```js
const [n, r, c] = require('fs').readFileSync('./data.in').toString().trim().split(' ').map(Number);
const SIZE = 2 ** n;
let depth = 0;

const divide = (x, y, size) => {
  const half = size >> 1;
  console.log(half)
  if (x === r && y === c) {
    console.log(depth);
    process.exit();
  }
  if (half < 1) {
    depth += 1;
    return;
  }

  divide(x, y, half);
  divide(x + half, y, half);
  divide(x, y + half, half);
  divide(x + half, y + half, half);
}

divide(0, 0, SIZE);
```

## 두 번째 풀이

첫 번째 풀이는 완탐이라 초과.
좌표가 어느 사분면에 해당하는지 알고 있다면 이를 이용하여 풀이 하는 방법.

```js
const [n, r, c] = require('fs').readFileSync('./data.in').toString().trim().split(' ').map(Number);
const SIZE = 2 << (n - 1);
let cnt = 0;

// 2차원 배열을 4등분하여 어느 사분면에 해당하는지 찾는다
// 0 -> 1사분면, ..., 3 -> 4사분면
const getQuadrant = (row, col, half) => {
  let quad = 0;
  if (row >= half) quad += 2;
  if (col >= half) quad += 1;

  return quad;
}

const divide = (x, y, size) => {
  if (size <= 1) return;
  const half = size >> 1;
  const quad = getQuadrant(x, y, half);
  /**
   * 현재 사분면 보다 앞에 있는 사분면의 개수를 파악해서
   * 그 만큼 곱해서 더해준다.
   **/
  cnt += quad * (half ** 2);
  if (quad === 0) divide(x, y, half);
  if (quad === 1) divide(x, y - half, half);
  if (quad === 2) divide(x - half, y, half);
  if (quad === 3) divide(x - half, y - half, half);
}

divide(r, c, SIZE);
console.log(cnt);
```