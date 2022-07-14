---
문제번호: 11048
문제이름: '이동하기'
주소: 'https://www.acmicpc.net/problem/11048'
분류: ['다이나믹 프로그래밍']
---

## 풀이

대각선은 고려 안해도 된다는 것을 깨달아야 한다. 대각선으로 가는 것은 결국 가로-세로 또는 세로-가로인데 어떠한 경우에도 두 경우보다 나을 수 없기 때문이다.

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const mat = data.map(d => d.split(' ').map(Number));

const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

for (let y = n - 1; y >= 0; y -= 1) {
	for (let x = m - 1; x >= 0; x -= 1) {
		dp[y][x] = mat[y][x] + Math.max(dp[y + 1][x], dp[y][x + 1]);
	}
}

console.log(dp[0][0]);
```