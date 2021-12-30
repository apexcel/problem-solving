const board1 = `6
1 2
3 7 4
9 4 1 7
2 7 5 9 4`.split('\n').map(v => v.split(' ').map(Number))

const board2 = `1
2 4
8 16 8
32 64 32 64
128 256 128 256 128`.split('\n').map(v => v.split(' ').map(Number))

function solution(board) {
    const maxLen = board.length;
    const dp = Array.from(Array(maxLen), () => Array(maxLen).fill(-1));
    
    const findMax = (x, y) => {
        if (y === maxLen - 1) return board[y][x];
        if (dp[y][x] !== -1) return dp[y][x];
        const mx = Math.max(findMax(x, y + 1), findMax(x + 1, y + 1));
        return dp[y][x] = board[y][x] + mx;
    }
    console.log(findMax(0, 0))
}

solution(board1);
solution(board2);