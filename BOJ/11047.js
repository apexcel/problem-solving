const scan = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, k] = (scan[0]).split(' ').map(v => Number(v)),
    coins = scan.slice(1).map(v => Number(v)).sort((a, b) => b - a),
    cnt = 0;

for (let i = 0; i < n; i += 1) {
    cnt += Math.floor(k / coins[i]);
    k %= coins[i];
}
console.log(cnt);

const fn = (index, k) => {
    if (k === 0 || index === coins.length) return cnt;
    k %= coins[index];
    cnt += Math.floor(k / coins[index]);
    return fn(index, k);
}
console.log(fn(0, k))