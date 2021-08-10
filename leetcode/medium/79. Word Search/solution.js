/** https://leetcode.com/problems/word-search/
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    const m = board.length, n = board[0].length
        , isVisited = Array.from(Array(m), () => Array(n).fill(0));

    for (let y = 0; y < m; y += 1) {
        for (let x = 0; x < n; x += 1) {
            if (dfs(board, word, isVisited, x, y, 0)) return true;
        }
    }
    return false;
};

// let str = []
function dfs(board, word, isVisited, x, y, depth) {
    if (depth === word.length) {
        // console.log(str)
        return true;
    }

    if (y >= board.length || x >= board[0].length || y < 0 || x < 0) {
        return false;
    }

    if (isVisited[y][x]) {
        return false
    }

    if (board[y][x] !== word[depth]) {
        return false;
    }

    isVisited[y][x] = 1;
    // str.push(board[y][x]);

    const up = dfs(board, word, isVisited, x, y - 1, depth + 1)
        , down = dfs(board, word, isVisited, x, y + 1, depth + 1)
        , left = dfs(board, word, isVisited, x - 1, y, depth + 1)
        , right = dfs(board, word, isVisited, x + 1, y, depth + 1);

    // str.pop();
    isVisited[y][x] = 0;

    return (up || down || left || right);
}

// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")
exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")