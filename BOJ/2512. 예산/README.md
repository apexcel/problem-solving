---
문제번호: 2512
문제이름: '예산'
주소: 'https://www.acmicpc.net/problem/2512'
분류: ['이분 탐색', '매개 변수 탐색']
---

# 풀이

1. 모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정한다.
2. 모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산하여 그 이상인 예산요청에는 모두 상한액을 배정한다. 상한액 이하의 예산요청에 대해서는 요청한 금액을 그대로 배정한다.

2번 조건을 토대로 얼마씩 할당해야 할 지 결정한다.

```js
const [n, arr, budget] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let lo = 1, hi = 0, mid; // 최소값은 1, 최대값은 주어진 수에서 찾는다
let res = 0;

const nums = arr.split(' ').map(a => {
    if (+a > hi) hi = +a;
    return +a;
});

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    const s = nums.reduce((sum, cur) => sum += Math.min(mid, cur), 0); // 예산 배정

    if (s <= budget) { // 할당 가능한 예산보다 작거나 같은 경우
        res = mid;
        lo = mid + 1;
    }
    else {
        hi = mid - 1;
    }
}

console.log(res);
```