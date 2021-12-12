---
문제번호: 1929
문제이름: '소수 구하기'
주소: 'https://www.acmicpc.net/problem/1929'
분류: ['수학', '정수론', '소수 판정', '에라토스테네스의 체']
---

# 풀이

## 첫 번째 풀이

`m`과 `n`의 구간을 에라토스테네스의 체로 풀이. 3중 포문때문에 시간이 오래걸린다.

```js
const [m, n] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const nums = Array(n - m + 1).fill(0).map((_, i) => m + i);
if (nums[0] === 1) nums[0] = -1;

for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === -1) continue;
    for (let j = 2; j * j <= nums[i]; j += 1) {
        if (nums[i] % j !== 0) continue;
        for (let k = 0; i + k < nums.length; k += j) nums[i + k] = -1;
    }
}


let res = '';
nums.forEach(num => res = num > 0 ? res + num + '\n' : res);
console.log(res);
```

## 두 번째 풀이

그냥 1부터 `n`까지 다 구한다음 `m`부터 출력하는 것이 더 빠름.

```js
const [m, n] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const p = Array(n + 1).fill(1);
p[0] = p[1] = 0;

for (let i = 2; i <= n; i += 1) {
    if (!p[i]) continue;
    for (let j = i + i; j <= n; j += i) p[j] = 0;
}

let res = '';
for (let i = m; i < p.length; i += 1) {
    if (p[i] > 0) res += i + '\n';
}
console.log(res);
```