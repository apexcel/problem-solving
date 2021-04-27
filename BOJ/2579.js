// const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const n = parseInt(sc[0], 10),
//       stair = sc.slice(1).map(v => +v);

const n = 6;
const stair = [
    10, 20, 15, 25, 10, 20
];
let cache = [];
cache[0] = stair[0]
cache[1] = Math.max(stair[0]+stair[1], stair[1]);
cache[2] = Math.max(stair[0]+stair[2], stair[1]+stair[2])

for (let i = 3; i < n; i += 1) {
    cache[i] = Math.max(cache[i - 2]+stair[i], cache[i - 3] + stair[i - 1] + stair[i]);
}

console.log(cache[n-1])