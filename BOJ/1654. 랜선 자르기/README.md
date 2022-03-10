---
문제번호: 1654
문제이름: '랜선 자르기'
주소: 'https://www.acmicpc.net/problem/1654'
분류: ['이분 탐색', '매개 변수 탐색']
---

# 풀이

**매개 변수 탐색(parametric search)**

- 최적화 문제(문제의 조건을 만족하는 특정 변수의 최소값, 최대값을 구하는 문제를) 결정 문제(decision problem)으로 바꾸어 푸는 것.
- 최대, 최소값을 찾는 문제의 경우 어떤 값이 조건을 만족하면 그 값 이상/이하의 값은 모두 조건을 만족해야 한다.
- 답의 범위가 이산적이거나 허용 오차가 존재해야 한다.
- 범위 내의 조건을 만족하는 가장 큰 값을 찾으라는 문제는 이분 탐색으로 결정 문제를 해결하면서 범위를 좁힐 수 있다.

```js
const [info, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
let mx = -1;

const nums = arr.map(a => {
    if (+a > mx) mx = +a;
    return +a;
});

let lo = 1, hi = mx, mid;
let res = 0;

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    const s = nums.reduce((sum, cur) => sum += Math.floor(cur / mid), 0);

    if (s >= k) {
        lo = mid + 1;
        res = mid;
    }
    else hi = mid - 1;
}
console.log(res);
```

1. 길이의 최소값은 1이고 주어진 숫자에서 최대값을 찾는다.
2. 현재 길이(`mid`)로 잘랐을 때 조건(`k` 이상이 되는지)을 만족하는지 확인한다.