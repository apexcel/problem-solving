// https://programmers.co.kr/learn/courses/30/lessons/77485
/**
 * 
 * @param {number} rows 
 * @param {number} columns 
 * @param {number[][]} queries 
 * @returns 
 */
function solution(rows, columns, queries) {
    const board = Array.from(Array(rows), () => []);
    let fill = 1;
    for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
            board[y][x] = fill++;
        }
    }

    return queries.map(query => selectedBlocks(board, query));
}

function selectedBlocks(board, query) {
    const [x1, y1, x2, y2] = query.map(q => q - 1);
    const nums = [];

    for (let col = y1; col < y2; col += 1) nums.push(board[x1][col])
    for (let row = x1; row < x2; row += 1) nums.push(board[row][y2]);
    for (let col = y2; col > y1; col -= 1) nums.push(board[x2][col]);
    for (let row = x2; row > x1; row -= 1) nums.push(board[row][y1]);

    const min = Math.min(...nums);
    nums.unshift(nums.pop());

    for (let col = y1; col < y2; col += 1) board[x1][col] = nums.shift();
    for (let row = x1; row < x2; row += 1) board[row][y2] = nums.shift();
    for (let col = y2; col > y1; col -= 1) board[x2][col] = nums.shift();
    for (let row = x2; row > x1; row -= 1) board[row][y1] = nums.shift();

    return min;
}
console.log(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]))
