---
문제번호: 2668
문제이름: '숫자고르기'
주소: 'https://www.acmicpc.net/problem/2668'
분류: ['그래프 이론', '그래프 탐색', '깊이 우선 탐색']
---

# 풀이

시작 지점에서 출발해서 다시 시작 지점으로 돌아올 수 있는가를 파악하는 그래프 문제와 같다. 그래서 카테고리에 그래프와 DFS가 있는듯.

```js
const [n, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const res = [];
const arr = nums.reduce((acc, cur) => {
    acc.push(+cur);
    return acc;
}, [0]);

const find = idx => {
    const isVisited = Array(+n + 1).fill(0);
    let i = idx, cur = arr[idx];

    while (!isVisited[i]) { // 무한 루프 방지
        // 시작 인덱스 (출발 노드)에서 시작해서 다시 시작 인덱스로 도착한 경우
        if (cur == idx) {
            res.push(idx);
            return;
        };
        isVisited[i] = 1;
        // 값을 인덱스로 지정하고 값의 값을 현재 값으로 변경
        i = cur;
        cur = arr[i]
    }
}

for (let i = 1; i <= +n; i += 1) {
    find(i);
}

console.log(res.length);
console.log(res.join('\n'));
```