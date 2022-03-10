---
문제번호: 2559
문제이름: '수열'
주소: 'https://www.acmicpc.net/problem/2559'
분류: ['누적 합', '투 포인터', '슬라이딩 윈도우']
---

# 풀이

## 첫 번째 풀이

메모리 초과

```js
const [info, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
const arr = nums.split(' ');

let res = 0;
for (let i = 0; i < n - k; i += 1) {
    const s = arr.slice(i, i + k).reduce((sum, cur) => sum + parseInt(cur), 0)
    res = Math.max(res, s);
}
console.log(res);
```

## 두 번째 풀이

시간 초과

```js
const [info, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
const arr = nums.split(' ');

let res = 0;
for (let i = 0; i < n - k; i += 1) {
    let sum = 0;
    for (let j = i; j < i + k && j < n; j += 1) {
        sum += +arr[j];
    }
    if (res < sum) res = sum;
}
console.log(res);
```

## 세 번째 풀이

성공

```js
const [info, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
const arr = nums.split(' ');

let sum = arr.slice(0, k).reduce((acc, cur) => acc + +cur, 0);
let mx = sum;
for (let i = 0, j = k; j < n; i += 1, j += 1) {
    sum += (arr[j] - arr[i]);
    mx = mx < sum ? sum : mx;
}
console.log(mx);
```