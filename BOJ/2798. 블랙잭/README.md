---
문제번호: 2798
문제이름: '블랙잭'
주소: 'https://www.acmicpc.net/problem/2798'
분류: ['브루트포스 알고리즘']
---

# 풀이

DFS로 풀었는데 depth도 깊지 않고 반복해야 할 원소의 수도 적으므로 3중 for문을 사용해도 좋을 것 같다.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(v => +v);
const nums = input[1].split(' ').map(v => +v);
const isVisited = Array(n).fill(0);
let temp = [], max = -1;

function solution(picked) {
    if (picked === 3) {
        const sum = temp.reduce((acc, cur) => acc + cur, 0);
        if (sum <= m && sum > max) max = sum;
        return;
    }

    for (let i = 0; i < n; i += 1) {
        if (!isVisited[i]) {
            isVisited[i] = 1;
            temp.push(nums[i]);
            solution(picked + 1);
            temp.pop();
            isVisited[i] = 0;
        }
    }
}

solution(0);
console.log(max);
```