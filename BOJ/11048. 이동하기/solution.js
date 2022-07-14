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
