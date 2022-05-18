---
문제번호: 3273
문제이름: '두 수의 합'
주소: 'https://www.acmicpc.net/problem/3273'
분류: ['정렬', '투 포인터']
---

## 첫 번째 풀이

```js
const [n, k, t] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const target = +t;
const nums = k.split(' ').map(Number).sort((a, b) => a - b);
let cnt = 0;

for (let i = 0, j = nums.length - 1; i < j;) {
    if (nums[i] + nums[j] === target) {
        cnt += 1;
        i += 1;
        j -= 1;
        continue;
    }

    if (nums[i] + nums[j] > target) j -= 1;
    else i += 1;
}

console.log(cnt);
```

## 두 번째 풀이

이분 탐색인데 더 오래 걸림

```js
const [n, k, t] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const TARGET = +t;
const SIZE = +n;
const nums = k.split(' ').map(Number).sort((a, b) => a - b);
let cnt = 0;

const lowerBound = diff => {
    let lo = 0, hi = SIZE - 1, mid;
    while (lo <= hi) {
        mid = (lo + hi) >> 1;
        if (nums[mid] === diff) {
            cnt += 1;
            return;
        }
        nums[mid] > diff ? hi = mid - 1 : lo = mid + 1;
    }
}

for (let num of nums) {
    if (2 * num >= TARGET) break;
    lowerBound(TARGET - num);
}

console.log(cnt);
```