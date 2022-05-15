---
문제번호: 2003
문제이름: '수들의 합 2'
주소: 'https://www.acmicpc.net/problem/2003'
분류: ['투 포인터']
---

## 첫 번째 풀이

```js
const [info, data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const nums = data.split(' ').map(Number);

let sum = 0, cnt = 0;
for (let i = 0, j = 0; i <= j && j < nums.length; j += 1) {
    sum += nums[j];
    if (sum === m) cnt += 1;

    while (sum > m) {
        sum -= nums[i];
        i += 1;
        if (sum === m) cnt += 1;
    }
}

console.log(cnt);
```

## 두 번째 풀이

```js
const [info, data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const nums = data.split(' ').map(Number);

let sum = 0, cnt = 0;
for (let i = 0, j = 0; j <= nums.length;) {
    if (sum <= m) {
        sum += nums[j];
        j += 1;
    }
    else {
        sum -= nums[i];
        i += 1;
    }
        
    if (sum === m) cnt += 1;
}

console.log(cnt);
```