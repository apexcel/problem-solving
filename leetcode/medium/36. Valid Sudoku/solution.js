/** https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    const map = new Map();
    for (let row = 0; row < board.length; row += 1) {
        for (let col = 0; col < board.length; col += 1) {
            const item = board[row][col];
            if (!isNaN(item)) {
                const subbox = `${Math.floor(row / 3)}${Math.floor(col / 3)}${item}`;
                const rowitem = `R${row}${item}`
                    , colitem = `C${col}${item}`;
                    console.log(map, subbox, rowitem, colitem)
                if (map.has(subbox) || map.has(rowitem) || map.has(colitem)) {
                    return false;
                }
                map.set(subbox, true);
                map.set(rowitem, true);
                map.set(colitem, true);
            }
        }
    }
    return true;
}
// function isValidSudoku(board) {
//     return isValidRowCol(board) && isValidSubBox(board);
// };

// function isValidRowCol(board) {
//     const size = board.length;
//     for (let y = 0; y < size; y += 1) {
//         const counterRow = new Array(10).fill(0);
//         const counterCol = new Array(10).fill(0);
//         for (let x = 0; x < size; x += 1) {
//             if (!isNaN(board[y][x])) {
//                 counterRow[board[y][x]] += 1;
//             }

//             if (!isNaN(board[x][y])) {
//                 counterCol[board[x][y]] += 1;
//             }

//             if (counterRow.find(n => n > 1) || counterCol.find(n => n > 1)) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }

// function isValidSubBox(board) {
//     const clockwise = [
//         [0, 0],
//         [-1, -1],
//         [0, -1],
//         [1, -1],
//         [1, 0],
//         [1, 1],
//         [0, 1],
//         [-1, 1],
//         [-1, 0],
//     ];

//     for (let y = 1; y <= 7; y += 3) {
//         for (let x = 1; x <= 7; x += 3) {
//             const counter = new Array(10).fill(0);

//             for (let k = 0; k < clockwise.length; k += 1) {
//                 const [dx, dy] = clockwise[k];
//                 if (!isNaN(board[y + dy][x + dx])) {
//                     counter[board[y + dy][x + dx]] += 1;
//                 }
//                 if (counter.find(n => n > 1)) {
//                     return false;
//                 }
//             }
//             console.log(y, x, counter)
//         }
//     }
//     return true;
// }

const a = [["9", ".", ".", "6", ".", ".", ".", ".", "."], [".", ".", ".", ".", "6", ".", ".", ".", "."], [".", ".", ".", ".", ".", "1", ".", "3", "."], [".", ".", ".", ".", ".", ".", ".", ".", "8"], [".", ".", ".", ".", ".", "8", ".", ".", "."], [".", ".", ".", "4", ".", ".", "2", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "1"], ["6", ".", ".", ".", "1", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."]]
const b = [["8","3",".",".","7",".",".",".","."]
,[".",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.table(b)
console.log(isValidSudoku(b))

