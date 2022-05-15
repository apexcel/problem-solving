---
문제번호: 1182
문제이름: '부분수열의 합'
주소: 'https://www.acmicpc.net/problem/1182'
분류: ['브루트포스 알고리즘', '백트래킹']
---

# 풀이

조합말고 비트마스크로 풀 수 있다. 

```js
const [info, data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, s] = info.split(' ').map(Number);
const nums = data.split(' ').map(Number);
let cnt = 0;
// (1 << n) - 1은 길이가 n인 1로 채워진 비트가 된다. 따라서 전체 집합이라고 할 수 있다.
// i는 현재 선택한 부분 집합이 된다.
for (let i = 1; i < (1 << n); i += 1) {
    let sum = 0;
    // j는 부분 집합에 원소가 들어있는지 확인한다.
    // (1 << j) 는 1을 j칸씩 왼쪽으로 밀게 되므로 각 원소가 부분 집합에 속해있는지 판별 할 수 있다.
    // 선택된 부분 집합(i)에 j번째 원소가 속해있다면 sum에 더한다.
    for (let j = 0; j < n; j += 1) {
        if (i & (1 << j)) sum += nums[j];
    }
    if (sum === s) cnt += 1;
}
console.log(cnt);


```