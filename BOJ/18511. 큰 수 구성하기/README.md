---
문제번호: 18511
문제이름: '큰 수 구성하기'
주소: 'https://www.acmicpc.net/problem/18511'
분류: ['브루트포스 알고리즘', '재귀']
---

# 풀이

## 첫 번째 풀이

DFS

```js
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, _] = input[0].split(' '), nums = input[1].split(' '), temp = [];
let prev = -1;

const dfs = depth => {
    const num = +temp.join('');
    if (num > prev && num <= +n) prev = num;
    if (depth === n.length) return;

    for (let i = 0; i < nums.length; i += 1) {
        temp.push(nums[i]);
        dfs(depth + 1);
        temp.pop();
    }
};
dfs(0);

console.log(prev);
```

## 두 번째 풀이

재귀

```js
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, k] = input[0].split(' '), nums = input[1].split(' ');
let val = 0;
const calc = x => {
    if (x > +n) return;
    if (x > val) val = x;
    for (let i = 0; i < +k; i += 1) {
        calc(x * 10 + (+nums[i]));
    }
};

calc(0);
console.log(val);
```