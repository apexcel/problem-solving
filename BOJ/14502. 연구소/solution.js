const input = require('fs').readFileSync('/dev/stdin').toString();

function parseData(input) {
    const splited = input.split('\n')
    const [h, w] = splited[0].split(' ').map(Number);
    const virus = [], board = Array.from(Array(h), () => Array(w)), safeZone = [];

    for (let y = 1; y <= h; y += 1) {
        const row = splited[y].split(' ');
        for (let x = 0; x < w; x += 1) {
            const n = Number(row[x]);
            if (n === 2) virus.push([x, y - 1]);
            else if (n === 0) safeZone.push([x, y - 1]);
            board[y - 1][x] = n;
        }
    }

    return {
        board, virus, h, w, safeZone
    };
}

function copy(data) {
    return JSON.parse(JSON.stringify(data));
}

function spread(b, v) {
    const dir = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0]
    ];
    const q = v;
    let infected = 0;

    while (q.length) {
        const [x, y] = q.pop();
        
        for (let i = 0; i < 4; i += 1) {
            const [dx, dy] = dir[i];
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= w || ny >= h || b[ny][nx] !== 0) continue;
            infected += 1;
            b[ny][nx] = 2;
            q.push([nx, ny]);
        }
    }
    return safeZone.length - infected - 3;
}

const { board, virus, h, w, safeZone } = parseData(input);

function solution() {
    let temp = [], mx = 0;
    
    const buildWall = (begin, cnt) => {
        if (cnt >= 3) {
            const cp = copy(board);
            temp.forEach(([x, y]) => cp[y][x] = 1);
            mx = Math.max(mx, spread(cp, copy(virus)));
            return;
        }

        for (let i = begin; i < safeZone.length; i += 1) {
            temp.push(safeZone[i]);
            buildWall(i + 1, cnt + 1);
            temp.pop()
        }
    }
    buildWall(0, 0);
    console.log(mx);
}
solution();