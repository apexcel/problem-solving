const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const board = input.map((row, y) => row.split(' ').map(Number));
const SIZE = 9;

const sudoku = (cnt) => {
    if (cnt === SIZE * SIZE) {
        console.log(board.map(b => b.join(' ')).join('\n'));
        process.exit();
    }

    const x = cnt % SIZE, y = Math.floor(cnt / SIZE);

    if (!board[y][x]) {
        for (let i = 1; i <= SIZE; i += 1) {
            if (isFollowRule(x, y, i)) {
                board[y][x] = i;
                sudoku(cnt + 1);
                board[y][x] = 0;
            }
        }
    }
    else sudoku(cnt + 1);
}

const isFollowRule = (x, y, k) => {
    for (let i = 0; i < SIZE; i += 1) {
        if (board[y][i] === k || board[i][x] === k) return false;
    }

    const bx = x - (x % 3), by = y - (y % 3);
    for (let i = by; i <= by + 2; i += 1) {
        for (let j = bx; j <= bx + 2; j += 1) {
            if (board[i][j] === k) return false;
        }
    }

    return true;
}

sudoku(0);