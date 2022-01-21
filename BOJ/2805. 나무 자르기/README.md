---
문제번호: 2805
문제이름: '나무 자르기'
주소: 'https://www.acmicpc.net/problem/2805'
분류: ['이분 탐색', '매개 변수 탐색']
---

# 풀이

`Math.max()`나 `Math.min()` 쓰면 콜 스택 초과난다. 파라메트릭 서치를 이용하는 문제로 이분 탐색시 `lo`, `hi` 값의 변화를 잘 파악하는 것이 중요함. `isSmaller()`에서 합을 구할 때 `for...of` 사용했었는데 단순 `for`문 보다 시간이 오래걸렸다.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, h] = input[0].split(' ').map(Number);
let mx = -1;
const nums = input[1].split(' ').map(v => {
    const ret = +v;
    if (ret > mx) mx = ret;
    return ret;
});

const isSmaller = (arr, height) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i] - height > 0 ? arr[i] - height : 0;
        if (sum >= h) return false;
    }
    return true;
};

const solution = () => {
    let lo = 0, hi = mx, mid = 0;
    
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        isSmaller(nums, mid) ? hi = mid - 1 : lo = mid + 1;
    }
    console.log(hi);
};

solution();
```