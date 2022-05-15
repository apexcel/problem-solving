# 첫 번째 풀이

테케만 다 맞음.

```js
const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const flip = incoming => (incoming + 2) % 4;

const turnRight = incoming => (incoming + 3) % 4;

const turnLeft = incoming => (incoming + 1) % 4;

const nextPosition = (h, w) => (x, y, look) => {
    const [dx, dy] = dir[look];
    let nx = x + dx, ny = y + dy;
    if (nx < 0) nx = w - 1;
    if (ny < 0) ny = h - 1
    if (nx >= w) nx = 0;
    if (ny >= h) ny = 0;
    return [nx, ny];
}

const solution = (grid) => {
    const h = grid.length, w = grid[0].length;
    const visited = Array.from(Array(4), () => Array.from(Array(h), () => Array(w).fill(0).map(() => [0, 0, 0, 0])))
    const res = [];
    const next = nextPosition(h, w);
    let cnt = 0;

    const DFS = (x, y, look, begin) => {
        if (visited[begin][y][x][look]) {
            res.push(cnt);
            return;
        }

        for (let i = 0; i < 4; i += 1) {
            if (begin !== i && visited[i][y][x][look]) {
                return;
            }
        }

        cnt += 1;
        visited[begin][y][x][look] = 1;
        const [nx, ny] = next(x, y, look);
        const type = grid[ny][nx];

        if (type === 'L') look = turnLeft(flip(look));
        if (type === 'R') look = turnRight(flip(look));

        DFS(nx, ny, look, begin);
    }

    for (let i = 0; i < 4; i += 1) {
        cnt = 0;
        DFS(0, 0, i, i);
    }

    return res.sort((a, b) => a - b)
}
}
```