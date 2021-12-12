---
문제번호: 3009
문제이름: '네 번째 점'
주소: 'https://www.acmicpc.net/problem/3009'
분류: ['구현', '기하학']
---

# 풀이

`XOR` 연산을 이용하여 푸는 문제. `XOR` 연산은 피연산자들의 비트가 같으면 `0` 다르면 `1`이 된다. 따라서 같은 숫자 2개를 `XOR` 연산하면 `0`이 되고 여기에 남은 1개의 숫자를 `XOR`하면 남아 있는 숫자와 동일한 값이 나오게 된다.

예컨대 `[30, 20], [10, 10], [10, 20]` 와 같이 x, y 좌표가 주어졌다면 `[30, 10]`이 답이된다.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let px = 0, py = 0;
input.forEach(coords => {
    const [x, y] = coords.split(' ');
    px ^= +x, py ^= y;
});
console.log(px, py);
```