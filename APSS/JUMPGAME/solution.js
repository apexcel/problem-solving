const board = `2 5 1 6 1 4 1
6 1 1 2 2 9 3
7 2 3 2 1 3 1
1 1 3 1 7 1 2
4 1 2 3 4 1 3
3 3 1 2 3 4 1
1 5 2 9 4 7 0`.split('\n').map(b => b.split(' '));

function solution(n, board) {
    const dp = Array.from(Array(n), () => Array(n).fill(-1));
    const jump = (x, y) => {
        if (y >= n || x >= n) return 0;
        if (y === n - 1 && x === n - 1) return 1;
        if (dp[y][x] !== -1) return dp[y][x];
        const move = +board[y][x];
        return dp[y][x] = jump(x + move, y) || jump(x, y + move);
    };
    return jump(0, 0);
}
solution(7, board)