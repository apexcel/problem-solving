---
문제번호: 11054
문제이름: '가장 긴 바이토닉 부분 수열'
주소: 'https://www.acmicpc.net/problem/11054'
분류: ['다이나믹 프로그래밍']
---

# 풀이

순증가하는 부분 수열의 길이를 담은 배열을 구하고 역으로 순감소하는 부분 수열의 길이를 담은 배열을 구한 뒤 두 수열을 합친다. 그 이후 가장 큰 값에서 -1을 하면된다. -1의 이유는 두 수열을 더한 것이기 때문에 겹치는 부분이 발생하기 때문.

```js
const [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = +n;
const arr = input.split(' ').map(Number);
const ltor = Array(len).fill(-1);
const rtol = Array(len).fill(-1);

const LIS = (target, begin, order = true) => {
    let ret = target[begin];
    if (ret !== -1) return ret;
    ret = 1;

    if (order) {
        for (let i = begin; i >= 0; i -= 1) {
            if (arr[begin] > arr[i]) {
                ret = Math.max(ret, LIS(target, i, order) + 1);
            }
        }
    }
    else {
        for (let i = begin; i < len; i += 1) {
            if (arr[begin] > arr[i]) {
                ret = Math.max(ret, LIS(target, i, order) + 1);
            }
        }
    }
    return target[begin] = ret;
}

for (let i = 0; i < len; i += 1) {
    LIS(ltor, i);
    LIS(rtol, i, false);
}

const res = ltor.map((v, i) => rtol[i] + v);
let mx = -1;
for (let v of res) {
    if (mx < v) mx = v;
}
console.log(mx - 1);
```