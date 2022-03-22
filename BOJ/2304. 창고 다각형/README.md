---
문제번호: 2304
문제이름: '창고 다각형'
주소: 'https://www.acmicpc.net/problem/2304'
분류: ['자료 구조', '브루트포스 알고리즘', '스택']
---

# 풀이

## 첫 번째 풀이

투 포인터 개념으로 접근. 

1. 좌측부터 시작해서 가장 높은 막대기를 찾고 그 과정에서 좌측 구간의 넓이도 같이 구함.
2. 우측에서 시작해서 좌측에서 찾은 가장 높은 막대기의 인덱스까지 진행하고 그 과정에서 우측 구간의 넓이도 같이 구함.
3. 마지막 남은 기둥의 높이만 더해주면 완성.

```js
const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const h = Array(1001).fill(0);

data.forEach(d => {
    const [pos, height] = d.split(' ').map(Number);
    h[pos] = height;
});

let area = 0;
let leftHeight = 0, leftIdx = 0;
let rightHeight = 0, rightIdx = 0;

// 좌측 구간의 넓이를 구하고 가장 큰 막대를 찾는다.
for (let i = 0; i < h.length; i += 1) {
    if (h[i] >= leftHeight) {
        area += leftHeight * (i - leftIdx);
        leftHeight = h[i];
        leftIdx = i;
    }
}

// 우측 구간의 넓이를 구하고 좌측 구간 탐색에서 찾은 큰 막대까지 과정을 진행한다.
for (let j = h.length - 1; j >= leftIdx; j -= 1) {
    if (h[j] >= rightHeight) {
        area += rightHeight * (rightIdx - j);
        rightHeight = h[j];
        rightIdx = j;
    }
}
// 남은 막대의 높이를 더해준다.
area += rightHeight;
console.log(area);
```

## 두 번째 풀이

스택으로 풀이. 가장 큰 높이의 위치까지 탐색하면서 현재 기둥보다 크면 스택에 집어넣고 스택의 top값을 계속 더하는 방식.

```js
const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const h = Array(1001).fill(0);
let left = 1001, right = 0, area = 0, mx = 0, stk = [];

data.forEach(d => {
    const [pos, height] = d.split(' ').map(Number);
    h[pos] = height;
    if (left > pos) left = pos;
    if (right < pos) right = pos;
    if (height > h[mx]) mx = pos;
});

for (let i = left; i <= mx; i += 1) {
    if (h[i]) {
        if (!stk.length) stk.push(h[i]);
        if (h[i] > stk.at(-1)) stk.push(h[i]);
    }
    area += stk.at(-1);
}

stk = [];

for (let i = right; i > mx; i -= 1) {
    if (h[i]) {
        if (!stk.length) stk.push(h[i]);
        if (h[i] > stk.at(-1)) stk.push(h[i]);
    }
    area += stk.at(-1);
}

console.log(area);
```