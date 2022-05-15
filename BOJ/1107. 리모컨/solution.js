const [n, m, k] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const targetNumber = +n;
const brokenButtons = m > 0 ? k.split(' ').map(Number) : [];
const disabledButtons = Array(10).fill(0).map((_, i) => brokenButtons.includes(i) ? 1 : 0);
let res = Math.abs(100 - targetNumber);

// TODO: 다른 방식으로 풀어보기

const counter = target => {
    if (target === 0) return disabledButtons[0] ? 0 : 1;

    let cnt = 0;
    while (target > 0) {
        if (disabledButtons[target % 10]) return 0;
        target = Math.floor(target / 10);
        cnt += 1;
    }
    return cnt;
}

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