const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [row, col] = input[0].split(' ').map(v => +v);
const matrix = input.slice(1);

function solution(col, row, matrix) {
    let maxVal = -1;
    for (let y = 0; y < row; y += 1) {
        for (let x = 0; x < col; x += 1) {
            for (let dy = -row; dy < row; dy += 1) {
                for (let dx = -col; dx < col; dx += 1) {
                    if (!dy && !dx) continue;

                    let str = '';
                    let py = y, px = x;

                    while (py >= 0 && py < row && px >= 0 && px < col) {
                        str += matrix[py][px];
                        if (Number.isInteger(Math.sqrt(+str))) maxVal = Math.max(maxVal, +str);
                        
                        py += dy;
                        px += dx;
                    }
                }
            }
        }
    }
    console.log(maxVal);
}

solution(col, row, matrix);