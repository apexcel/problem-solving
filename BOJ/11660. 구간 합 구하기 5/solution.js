const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);

const matrix = data.splice(0, n).map(d => d.split(' ').map(Number));
const coords = data.map(d => d.split(' ').map(Number));

const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i += 1) {
    const row = matrix[i - 1];
    for (let j = 1; j <= n; j += 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + row[j - 1] - dp[i - 1][j - 1];
    }
}

const gridSum = (y1, x1, y2, x2) => {
    return dp[y2][x2] -dp[y1 - 1][x2] - dp[y2][x1 - 1] + dp[y1 - 1][x1 - 1];
}

const res = coords.map(c => gridSum(...c)).join('\n');

console.log(res);