const board = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));

const dir = [
    [[1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [-1, 1]],
    [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [-1, 0]],
    [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [-1, -1]],
    [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, -1]]
];

const inBoundary = (x, y) => x >= 0 && y >= 0 && x < 19 && y < 19;

const isDiffer = (color, x, y) => board[y][x] !== color;

const isOmok = (x, y) => {
    const currentColor = board[y][x];

    loop: for (let d of dir) {
        let i = 0;
        for (i; i < 4; i += 1) {
            const [dx, dy] = d[i];
            const [bx, by] = [d[5][0] + x, d[5][1] + y];
            const [ex, ey] = [d[4][0] + x, d[4][1] + y];
            const nx = x + dx, ny = y + dy;
            if (!inBoundary(nx, ny) || isDiffer(currentColor, nx, ny) 
                || (inBoundary(ex, ey) && !isDiffer(currentColor, ex, ey))
                || (inBoundary(bx, by) && !isDiffer(currentColor, bx, by))
                ) continue loop;
        }
        if (i === 4) {
            return true;
        }
    }
    return false;
}

for (let x = 0; x < 19; x += 1) {
    for (let y = 0; y < 19; y += 1) {
        if (!board[y][x]) continue;
        if (isOmok(x, y)) {
            console.log(board[y][x]);
            console.log(y + 1, x + 1);
            process.exit();
        }
    }
}
console.log(0);