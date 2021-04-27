const board = {
    A: [
        [2, 5, 1, 6, 1, 4, 1],
        [6, 1, 1, 2, 2, 9, 3],
        [7, 2, 3, 2, 1, 3, 1],
        [1, 1, 3, 1, 7, 1, 2],
        [4, 1, 2, 3, 4, 1, 2], // 마지막 2를 3으로 바꾸면 불가능 함.
        [3, 3, 1, 2, 3, 4, 1],
        [1, 5, 2, 9, 4, 7, 0]
    ]
};

let cache = Array.from(Array(100), () => Array(100).fill(-1));

const jump = (board: number[][], y: number, x: number): number => {
    const len = board.length;
    if (y >= len || x >= len) return 0;
    if (y === len - 1 && x === len - 1) return 1;

    if (cache[y][x] !== -1) return cache[y][x];
    const next = board[y][x];
    return jump(board, y + next, x) || jump(board, y, x + next);
};

console.log(jump(board.A, 0, 0))