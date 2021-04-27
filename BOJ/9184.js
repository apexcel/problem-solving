let memo = Array.from(Array(21), () => Array.from(Array(21), () => Array(21).fill(0)));
const w = (a, b, c) => {     
    if (a <= 0 || b <= 0 || c <= 0) {
        return 1;
    }
    if (a > 20 || b > 20 || c > 20) {
        return w(20, 20, 20);
    }

    if (memo[a][b][c]) {
        return memo[a][b][c];
    }
    else if (a < b && b < c) {
        memo[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
        return memo[a][b][c];
    }
    else {
        memo[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
        return memo[a][b][c];
    }
};

const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(e => parseInt(e, 10)));
let printer = '';
sc.forEach(v => {
    [a, b, c] = v;
    if (a === -1 && b === -1 && c === -1) {
        console.log(printer);
        return;
    }
    else {
        printer += `w(${a}, ${b}, ${c}) = ${w(a, b, c)}\n`;
    }
})