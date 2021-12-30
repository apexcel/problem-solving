const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const board = input.slice(1).map(v => v.split(' ').map(e => BigInt(e)));

function solution() {
    const dp = Array.from(Array(n), () => Array(n).fill(0n));
    const N = BigInt(n);
    const jump = (x, y) => {
        if (y === N - 1n && x === N - 1n) return 1n;
        if (dp[y][x] !== 0n) return dp[y][x];
        if (board[y][x] === 0n) return 0n;

        const cur = board[y][x];
        if (x + cur < N) dp[y][x] += jump(x + cur, y);
        if (y + cur < N) dp[y][x] += jump(x, y + cur);
        return dp[y][x];
    };

    jump(0n, 0n);
    console.log(dp[0][0].toString());
}

solution();