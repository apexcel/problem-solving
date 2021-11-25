---
문제번호: 11659
문제이름: '구간 합 구하기 4'
주소: 'https://www.acmicpc.net/problem/11659'
분류: ['누적 합']
---

# 풀이

## 첫 번째 풀이

```js
const sc = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const parse = str => str.split(' ').map(n => parseInt(n));
const [n, m] = parse(sc[0]);
const nums = parse(sc[1]);
const ranges = [];

for (let i = 2; i < sc.length; i += 1) {
    ranges[i - 2] = parse(sc[i]);
}

const sum = [nums[0]];
for (let i = 1; i < n; i += 1) {
    sum[i] = sum[i - 1] + nums[i];
}

let res = '';
for (let i = 0; i < m; i += 1) {
    const [begin, end] = ranges[i];
    if (begin - 2 < 0) res += sum[end - 1];
    else res += sum[end - 1] - sum[begin - 2];
    res += '\n';
}

console.log(res);
```

500ms

## 두 번째 풀이

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = input[1].split(' ');
const sum = [+nums[0]];
let str = '';

for (let i = 1; i < nums.length; i += 1) {
    sum[i] = sum[i - 1] + +nums[i];
}

for (let i = 2; i < input.length; i += 1) {
    const [x, y] = input[i].split(' ');
    str += (x < 2 ? sum[y - 1] : sum[y - 1] - +sum[x - 2]) + '\n';
}

console.log(str);
```

392ms