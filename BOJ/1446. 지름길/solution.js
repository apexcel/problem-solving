const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, d] = info.split(' ').map(Number);
const dp = Array(d + 1).fill(1).map((_, i) => i);
const map = new Map();

data.forEach(d => {
    const [from, to, dist] = d.split(' ').map(Number);
    map.has(from) ? map.set(from, [...map.get(from), [to, dist]]) : map.set(from, [[to, dist]]);
})

for (let i = 0; i <= d; i += 1) {
    if (i > 0) dp[i] = Math.min(dp[i], dp[i - 1] + 1);
    if (map.has(i)) {
        const items = map.get(i);
        for (let j = 0; j < items.length; j += 1) {
            const [to, dist] = items[j];
            if (to > d || to - i < dist) continue;
            dp[to] = Math.min(dp[to], dp[i] + dist);
        }
    }
}
console.log(dp[d]);