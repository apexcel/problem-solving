const [n, m, ...s] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const seats = s.map(Number);
const dp = [1, 1];
for (let i = 2; i < 41; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
}

const len = [];
let prev = 1;
for (let seat of seats) {
    len.push(seat - prev);
    prev = seat + 1;
}
len.push(n - (prev - 1));

console.log(len.reduce((acc, cur) => acc *= dp[cur], 1));