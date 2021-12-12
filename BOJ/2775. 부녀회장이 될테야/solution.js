const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tc = input.slice(1);
const apt = Array.from(Array(15), () => Array(15).fill(0).map((_, i) => i + 1));

for (let y = 1; y < 15; y += 1) {
    for (let x = 1; x < 15; x += 1) {
        apt[y][x] = apt[y - 1][x] + apt[y][x - 1];
    }
}

let res = '';
for (let i = 0; i < tc.length; i += 2) {
    const n = tc[i], k = tc[i + 1];
    res += apt[n][k - 1] + '\n';
}

console.log(res);