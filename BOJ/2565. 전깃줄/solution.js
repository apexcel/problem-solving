const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const wires = input.slice(1).map(v => v.split(' ').map(e => +e)).sort((a, b) => a[0] - b[0]);
const dp = Array(wires.length).fill(0);

for (let i = 0; i < wires.length; i += 1) {
    dp[i] = 1;
    for (let j = 0; j < i; j += 1) {
        if (wires[i][1] > wires[j][1] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
    }
}
console.log(wires.length - Math.max(...dp));