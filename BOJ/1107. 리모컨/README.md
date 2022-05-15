---
문제번호: 1107
문제이름: '리모컨'
주소: 'https://www.acmicpc.net/problem/1107'
분류: ['브루트포스 알고리즘']
---

# 풀이

몇 번 풀다가 안 풀려서 다른 사람 풀이 참고. 자세한 내용은 주석 확인

```js
const [n, m, k] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const targetNumber = +n;
const brokenButtons = m > 0 ? k.split(' ').map(Number) : [];
const disabledButtons = Array(10).fill(0).map((_, i) => brokenButtons.includes(i) ? 1 : 0);
let res = Math.abs(100 - targetNumber);

const counter = target => {
    // 0인 경우 예외 처리
    if (target === 0) return disabledButtons[0] ? 0 : 1;

    let cnt = 0;
    while (target > 0) {
        // 입력값중 고장난 버튼이 있다면 바로 반환
        if (disabledButtons[target % 10]) return 0;
        target = Math.floor(target / 10);
        cnt += 1;
    }
    // 총 몇번 버튼을 눌렀는가
    return cnt;
}

// 채널 999999에서 - 버튼 눌러서 내릴 수도 있으므로
for (let i = 0; i <= 1000000; i += 1) {
    const cnt = counter(i);
    if (cnt > 0) {
        const pressed = Math.abs(i - targetNumber);
        if (res > cnt + pressed) {
            res = cnt + pressed;
        }
    }
}

console.log(res);
```