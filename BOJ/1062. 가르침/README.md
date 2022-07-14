---
문제번호: 1062
문제이름: '가르침'
주소: 'https://www.acmicpc.net/problem/1062'
분류: ['브루트포스 알고리즘', '비트마스킹', '백트래킹']
---

## 풀이

백트래킹문제이지만 조금만 변형해서 비트마스킹을 하면 빠르게 할 수 있다. 비트마스킹시에 주의할 점은 연산자 우선순위 예상한 것과 다르게 동작할 수 있으니 괄호를 신경써서 붙여야 한다.

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);

// 'acint' 다섯개의 알파벳이 최소 요건이므로 5개 미만이면 읽을 수 있는 것이 없음.
if (k < 5) {
    console.log(0);
    process.exit();
}

// 모든 알파벳이면 다 읽을 수 있음.
if (k === 26) {
    console.log(n);
    process.exit();
}

const bitmask = (str) => {
    let bits = 0;
    for (const char of str) {
        const pos = char.charCodeAt(0) - 97;
        bits |= (1 << pos);
    }
    return bits;
}

const bitmasked = data.map(bitmask);
// 'acint'를 기본적으로 비트마스킹하면 532741이 나온다.
let alphabets = 532741, mx = 0, cnt = 0;

const backtrack = (depth, begin, limit) => {
    if (depth === limit) {
        for (const bits of bitmasked) {
            if ((bits & alphabets) === bits) cnt += 1;
        }
        mx = mx < cnt ? cnt : mx;
        cnt = 0;
        return;
    }

    for (let i = begin; i < 26; i += 1) {
        // alphabets & (1 << i) === 0 이라고만 적으면 0이 나온다. boolean 값을 위해서는 괄호로 감싸야함.
        if ((alphabets & (1 << i)) === 0) {
            alphabets ^= (1 << i);
            backtrack(depth + 1, i + 1, limit);
            alphabets ^= (1 << i);
        }
    }
}

backtrack(0, 0, k - 5);
console.log(mx);
```