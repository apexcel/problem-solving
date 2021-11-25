const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [col, row] = input[0].split(' ').map(v => +v);
solution(col, row, input.slice(1).map(v => v.trim()));

function solution(col, row, board) {
    let gameBoard = Array.from(Array(8), () => Array(8));
    let res = 999;

    for (let y = 0; y <= col - 8; y += 1) {
        for (let x = 0; x <= row - 8; x += 1) {
            let wb = 0, bw = 0;

            for (let i = 0; i < 8; i += 1) {
                for (let j = 0; j < 8; j += 1) {
                    gameBoard[i][j] = board[y + i][x + j];
                }
            }

            for (let i = 0; i < 8; i += 1) {
                for (let j = 0; j < 8; j += 1) {
                    const cur = gameBoard[i][j] === 'W';
                    if ((i + j) % 2) {
                        cur ? bw += 1 : wb += 1;
                    }
                    else {
                        cur ? wb += 1 : bw += 1;
                    }
                }
            }
            res = Math.min(res, wb, bw);
        }
    }
    console.log(res);
}