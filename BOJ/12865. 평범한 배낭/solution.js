const [info, ...rest] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
const items = rest.map(item => item.split(' ').map(Number));

const dp = Array(k + 1).fill(0);
items.forEach(([w, v]) => {
    for (let i = k; i >= w; i -= 1) {
        dp[i] = Math.max(dp[i], dp[i - w] + v);
    }
})
console.log(dp[k]);