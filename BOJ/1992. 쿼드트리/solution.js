const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const board = input.slice(1);

const divide = (n, x, y) => {
    if (n <= 1) return board[y][x];
    
    const half = n / 2;
    const check = val => Array.prototype.every.call(temp, ch => ch === val);
    let res = '', temp = '';

    temp += divide(half, x, y);
    temp += divide(half, x + half, y);
    temp += divide(half, x, y + half);
    temp += divide(half, x + half, y + half);
    
    if (check('1')) temp = '1';
    else if (check('0')) temp = '0';
    else temp = '(' + temp + ')';

    return res + temp;
}

console.log(divide(n, 0, 0));