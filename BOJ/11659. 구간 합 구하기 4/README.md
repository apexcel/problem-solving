---
문제번호: 11659
문제이름: '구간 합 구하기 4'
주소: 'https://www.acmicpc.net/problem/11659'
분류: ['누적 합']
---

# 풀이

```js
const [info, nums, ...ranges] = require('fs').readFileSync('./data.in').toString().split('\n');
const [n, m] = info.split(' ').map(Number);
const k = nums.split(' ').map(Number);
const psum = [0];
const res = [];

k.forEach((v, i) => psum[i + 1] = psum[i] + v)

for (let i = 0; i < m; i += 1) {
    const [begin, end] = ranges[i].split(' ').map(Number);
    res.push(psum[end] - psum[begin - 1]);
}

console.log(res.join('\n'));
```