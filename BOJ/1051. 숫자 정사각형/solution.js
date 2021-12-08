const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [h, w] = input[0].split(' ').map(Number);
const mn = Math.min(h, w);
const board = input.slice(1);
let mx = 1;

for (let i = 0; i <= mn; i += 1) {
    for (let y = 0; y + i < h; y += 1) {
        for (let x = 0; x + i < w; x += 1) {
            const tl = board[y][x];
            if (tl === board[y + i][x] && tl === board[y][x + i] && tl === board[y + i][x + i]) {
                const pow = (i + 1) ** 2;
                if (mx < pow) mx = pow;
            }
        }
    }
}

console.log(mx);