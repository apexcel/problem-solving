// https://programmers.co.kr/learn/courses/30/lessons/12905

const solution = board => {
    let len = board[0][0];
    for (let y = 0; y < board.length; y += 1) {
        for (let x = 0; x < board[0].length; x += 1) {
            if (y - 1 >= 0 && x - 1 >= 0 && board[y][x] !== 0) {
                board[y][x] += Math.min(board[y - 1][x], board[y][x - 1], board[y - 1][x - 1]);
            }
            len = len < board[y][x] ? board[y][x] : len;
        }
    }
    return len * len;
};

// solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]])
// solution([[0,0,1,1],[1,1,1,1]])
// solution([[1, 0],[0, 0]])
solution([[1, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]])