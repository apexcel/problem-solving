---
문제번호: 2635
문제이름: '수 이어가기'
주소: 'https://www.acmicpc.net/problem/2635'
분류: ['수학', '브루트포스 알고리즘']
---

# 풀이

## 첫 번째 풀이

x = a - b에서 x값에 대해서 a와 b로 치환하면서 풀이

```js
const a = +require('fs').readFileSync('/dev/stdin').toString();
const solution = (a, b) => {
    const ret = [a, b];

    const calc = (c1, c2) => {
        const nextC1 = -c2, nextC2 = -(c1 + c2);
        const res = (c1 * a) - (c2 * b);
        if (res >= 0) {
            ret.push(res);
            calc(nextC1, nextC2);
        }
    }

    calc(1, 1);
    return ret;
}

let res = [];
for (let b = Math.floor(a / 2); b <= Math.ceil(a * 2 / 3); b += 1) {
    const arr = solution(a, b);
    if (res.length < arr.length) {
        res = arr;
    }
}
console.log(res.length);
console.log(res.join(' '));
```

## 두 번째 풀이

c = a - b에서 b와 c에 대해서 재귀적으로 풀이

```js
const a = +require('fs').readFileSync('/dev/stdin').toString();
const solution = (a, b) => {
    const ret = [a, b];

    const calc = (alpha, beta) => {
        const gamma = alpha - beta;
        if (gamma < 0) return;
        ret.push(gamma);
        calc(beta, gamma);
    }

    calc(a, b);
    return ret;
}

let res = [];
for (let b = Math.floor(a / 2); b <= Math.ceil(a * 2 / 3); b += 1) {
    const arr = solution(a, b);
    if (res.length < arr.length) {
        res = arr;
    }
}
console.log(res.length);
console.log(res.join(' '));
```