---
문제번호: 2493
문제이름: '탑'
주소: 'https://www.acmicpc.net/problem/2493'
분류: ['자료 구조', '스택']
---

# 첫 번째 풀이

stack 활용

```js
const [n, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const towers = nums.split(' ').map(Number);
const stk = [];
const res = [];

for (let i = 0; i < towers.length; i += 1) {
    const cur = towers[i];
    if (!stk.length) {
        stk.push([cur, i + 1]);
        res.push(0);
        continue;
    }

    let top = stk.pop();
    while (stk.length && top[0] < cur) {
        top = stk.pop();
    }

    if (top[0] < cur) {
        res.push(0);
    }
    else {
        res.push(top[1]);
        stk.push(top);
    }
    stk.push([cur, i + 1]);
}

console.log(res.join(' '));
```