const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const flip = incoming => (incoming + 2) % 4;

const turnRight = incoming => (incoming + 3) % 4;

const turnLeft = incoming => (incoming + 1) % 4;

const solution = (grid) => {
    const h = grid.length, w = grid[0].length;
    const visited = Array.from(Array(h), () => Array(w).fill(0).map(() => [0, 0, 0, 0]));
    const res = [];

    const DFS = (x, y, look) => {
        let cnt = 0;
        while (!visited[y][x][look]) {
            visited[y][x][look] = 1;
            cnt += 1;

            const [dx, dy] = dir[look];
            x = (x + dx + w) % w;
            y = (y + dy + h) % h;

            const type = grid[y][x];
            if (type === 'L') look = turnLeft(flip(look));
            if (type === 'R') look = turnRight(flip(look));
        }

        res.push(cnt);
    }

    for (let r = 0; r < h; r += 1) {
        for (let c = 0; c < w; c += 1) {
            for (let d = 0; d < 4; d += 1) {
                if (!visited[r][c][d]) {
                    DFS(c, r, d);
                }
            }
        }
    }
    console.log(res.sort((a, b) => a - b))
    return res.sort((a, b) => a - b);
}

// solution(["SL", "LR"])
// solution(["S"])
solution(["R", 'R'])