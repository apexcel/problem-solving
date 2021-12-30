---
문제번호: 1158
문제이름: '요세푸스 문제'
주소: 'https://www.acmicpc.net/problem/1158'
분류: ['자료 구조', '큐']
---

# 풀이

## 첫 번째 풀이

큐를 쓰는 방법 반복문을 통해 카운트 `k`와 같으면 제거한다, 2512ms

```js
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const solution = (n, k) => {
    const q = Array(n).fill(0).map((_, i) => i + 1);
    const res = [];
    let cnt = 1;
    while(q.length) {
        const cur = q.shift();
        if (cnt === k) {
            cnt = 0;
            res.push(cur);
        }
        else q.push(cur);
        cnt += 1;
    }
    return res.join(', ');
};
console.log(`<${solution(+a, +b)}>`);

```

## 두 번째 풀이

큐에서 제거하는 것은 동일하나 다음 인덱스를 계산하여 카운트를 하지 않아도 되므로 불필요한 반복이 제거됨, 128ms

```js
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const solution = (n, k) => {
    const q = Array(n).fill(0).map((_, i) => i + 1);
    const res = [];
    let pos = k - 1;
    while(q.length) {
        res.push(q.splice(pos, 1));
        pos = (pos + k - 1) % q.length;
    }
    return res.join(', ');
};
console.log(`<${solution(+a, +b)}>`);
```