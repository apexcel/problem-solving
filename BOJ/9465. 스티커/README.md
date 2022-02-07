---
문제번호: 9465
문제이름: '스티커'
주소: 'https://www.acmicpc.net/problem/9465'
분류: ['다이나믹 프로그래밍']
---

# 풀이

```js
const [tc, ...rest] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const data = [];
let tmp;

for (let i = 0; i < rest.length; i += 3) {
    const r1 = rest[i + 1].split(' ');
    const r2 = rest[i + 2].split(' ');
    tmp = [];
    for (let j = 0; j < +rest[i]; j += 1) {
        tmp[j] = [+r1[j], +r2[j]];
    }
    data.push(tmp);
}

const solution = stickers => {
    const dp = [
        [0, 0],
        [0, 0],
        ...stickers
    ];

    for (let i = 2; i < dp.length; i += 1) {
        const [ppl, ppr] = dp[i - 2];
        const [pl, pr] = dp[i - 1];

        dp[i][0] += Math.max(ppr, pr);
        dp[i][1] += Math.max(ppl, pl);
    }

    return Math.max(...dp[dp.length - 1]);
}

console.log(data.map(solution).join('\n'));
```