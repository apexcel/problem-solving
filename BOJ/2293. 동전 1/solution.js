const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);
const nums = data.map(Number).sort((a, b) => a - b);

const dp = Array(10001).fill(0);
dp[0] = 1;

for (let num of nums) {
    for (let i = num; i <= k; i += 1) {
        dp[i] += dp[i - num];
    }
}

console.log(dp[k])