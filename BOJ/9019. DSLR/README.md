---
문제번호: 9019
문제이름: 'DSLR'
주소: 'https://www.acmicpc.net/problem/9019'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색']
---

## 풀이

`shift()` 연산 때문에 엄청나게 느림. 인덱스 증가 방식을 이용하면 조금 더 나은듯.
`~~`연산은 0보다 큰 $2^{32} - 1$이하의 연산에서 `Math.floor()`와 같다.
```js
const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const pairs = data.map(d => d.split(' ').map(Number));

const fnD = n => {
  const ret = 2 * n;
  return ret > 9999 ? ret % 10000 : ret;
}

const fnS = n => {
  const ret = n - 1;
  return n === 0 ? 9999 : ret;
}

const fnL = n => {
  const quot = ~~(n / 1000);
  const rem = n % 1000;
  return rem * 10 + quot;
}

const fnR = n => {
  const quot = ~~(n / 10);
  const rem = n % 10;
  return rem * 1000 + quot;
}

const fns = [
  ['D', fnD],
  ['S', fnS],
  ['L', fnL],
  ['R', fnR]
];

const visited = Array(10000);

const solution = (origin, target) => {
  const q = [[origin, '']];
  visited.fill(0);
  visited[origin] = 1;

  while (q.length) {
    const [cur, ops] = q.shift();
    if (cur === target) return ops;

    for (const [name, fn] of fns) {
      const next = fn(cur);
      if (!visited[next]) {
        visited[next] = 1;
        q.push([next, ops + name]);
      }
    }
  }
}

console.log(pairs.map(([origin, target]) => solution(origin, target)).join('\n'));
```