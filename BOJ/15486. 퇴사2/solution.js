const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const pairs = [[0, 0], ...data.map(d => d.split(' ').map(Number))];
const dp = Array(+n + 10).fill(0);

for (let i = 1; i < pairs.length; i += 1) {
    const [t, p] = pairs[i];
    console.log(`i: ${i} \t t: ${t}`)
    console.log(`dp[${t + i}] = max(${dp[t + i]}, ${dp[i]} + ${p})\n`)
    dp[t + i] = Math.max(dp[t + i], dp[i] + p);
}
console.table(dp)
