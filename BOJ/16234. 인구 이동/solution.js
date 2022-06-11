const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [SIZE, LO, HI] = info.split(' ').map(Number);
const mat = data.map(d => d.split(' ').map(Number));

const dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < SIZE && x < SIZE;

const shouldOpenBorder = (a, b) => {
    const diff = Math.abs(a - b);
    if (diff >= LO && diff <= HI) return true;
    return false;
}

let visited, nextUnion = 2;
const BFS = (bx, by) => {
    const q = [[bx, by]];
    let sum = mat[by][bx], cnt = 1;
    visited[by][bx] = 1;

    while (q.length) {
        const [x, y] = q.shift();

        for (let [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny) || visited[ny][nx]) continue;
            if (shouldOpenBorder(mat[y][x], mat[ny][nx])) {
                visited[y][x] = nextUnion;
                visited[ny][nx] = nextUnion;
                sum += mat[ny][nx];
                cnt += 1;
                q.push([nx, ny]);
            }
        }
    }

    if (cnt > 1) {
        const avg = Math.floor(sum / cnt);
        for (let y = 0; y < SIZE; y += 1) {
            for (let x = 0; x < SIZE; x += 1) {
                if (visited[y][x] === nextUnion) mat[y][x] = avg;
            }
        }
        nextUnion += 1;
    }
}

const solution = (depth) => {
    visited = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
    for (let y = 0; y < SIZE; y += 1) {
        for (let x = 0; x < SIZE; x += 1) {
            if (!visited[y][x]) BFS(x, y);
        }
    }

    const shouldRecursion = visited.reduce((sum, row) => sum + row.reduce((acc, cur) => acc + cur, 0), 0);
    if (shouldRecursion > SIZE * SIZE) {
        solution(depth + 1);
    }
    else {
        console.log(depth);
        process.exit();
    }
}

solution(0);