---
문제번호: 14502
문제이름: '연구소'
주소: 'https://www.acmicpc.net/problem/14502'
분류: '[그래프 이론', '브루트포스 알고리즘', '그래프 탐색', '너비 우선 탐색']
---

# 풀이

## 첫 번째 풀이

벽을 세울 때 이중 for문을 사용. 오래 걸림 3368ms

```js
const input = require('fs').readFileSync('/dev/stdin').toString();

function parseData(input) {
    const splited = input.split('\n')
    const [h, w] = splited[0].split(' ').map(Number);
    const virus = [], board = Array.from(Array(h), () => Array(w));
    let safeZone = -3;

    for (let y = 1; y <= h; y += 1) {
        const row = splited[y].split(' ');
        for (let x = 0; x < w; x += 1) {
            const n = Number(row[x]);
            if (n === 2) virus.push([x, y - 1]);
            else if (n === 0) safeZone += 1;
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
    return safeZone - infected;
}

const { board, virus, h, w, safeZone } = parseData(input);

function solution() {
    let cp = copy(board);
    let mx = 0;
    const buildWall = (cnt) => {
        if (cnt >= 3) {
            mx = Math.max(mx, spread(copy(cp), copy(virus)));
            return;
        }

        for (let y = 0; y < h; y += 1) {
            for (let x = 0; x < w; x += 1) {
                if (cp[y][x] === 0) {
                    cp[y][x] = 1;
                    buildWall(cnt + 1);
                    cp[y][x] = 0;
                }
            }
        }
    }
    buildWall(0);
    console.log(mx)
}
solution();
```

## 두 번째 풀이

이중 for문 대신 벽을 세울 수 있는 좌표만 뽑아낸 뒤, 이를 기반으로 3개를 조합하는 방식으로 사용. 932ms. 퍼포먼스 향상할 수 있을 것 같은데 더 이상 생각안나서 나중에 찾아봐야겠다.

```js
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
```