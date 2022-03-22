---
문제번호: 2110
문제이름: '공유기 설치'
주소: 'https://www.acmicpc.net/problem/2110'
분류: ['이분 탐색', '매개변수 탐색']
---

# 풀이

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, c] = info.split(' ').map(Number);
const axis = data.map(Number).sort((a, b) => a - b);

// gap만큼의 거리마다 설치하고 설치된 개수를 반환
const isPossible = (gap) => {
    let mounted = 0, between = 0;
    for (let x of axis) {
        if (between <= x) {
            mounted += 1;
            between = x + gap;
        }
    }
    return mounted;
}

const solution = () => {
    // 최소거리 1
    // 최대거리 맨 끝집 - 맨 첫집의 거리
    let lo = 1, hi = axis.at(-1) - axis[0], mid, res = 0;
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        // 현재 간격만큼 설치된 공유기의 개수가 c보다 크다면 간격을 더 늘려도 된다
        if (isPossible(mid) >= c) {
            res = mid;
            lo = mid + 1
        }
        else hi = mid - 1;
    }
    return res;
}

console.log(solution());
```