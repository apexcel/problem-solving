const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const tcs = data.map(d => d.split(' ').map(Number));

const solution = (m, n, x, y, depth) => {
    if (m === x && n === y) {
        console.log(depth)
        return
    }
    y = (y % n) + 1;
    if (y === n) {
        x = (x % m) + 1;
    }
    console.log(x, y, depth)
    solution(m, n, x, y, depth + 1)
}

solution(...tcs[0], 0)