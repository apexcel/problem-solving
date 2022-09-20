---
문제번호: 3055
문제이름: 탈출
주소: https://www.acmicpc.net/problem/3055
분류: [그래프 이론, 그래프 탐색, 너비 우선 탐색]
---

# 풀이

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [r, c] = info.split(' ').map(Number);
const mat = data.map(d => d.split(''));
const visited = Array.from(Array(r), () => Array(c).fill(0));
const dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];
const hedgehog = [], puddles = []; // 고슴도치와 물웅덩이들의 위치
let done = -1, cnt = 0;

for (let y = 0; y < r; y += 1) {
    for (let x = 0; x < c; x += 1) {
        if (mat[y][x] === 'X' || mat[y][x] === '*') {
            if (mat[y][x] === '*') puddles.push([x, y]);
            visited[y][x] = 1; // 1인 경우 돌이나 물웅덩이
        }
        if (mat[y][x] === 'S') {
            hedgehog.push([x, y]);
            visited[y][x] = 2; // 2인 경우 고슴도치의 시작위치
        }
    }
}

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < r && x < c;

/**
 * 1이면 돌이나 물웅덩이이므로 다음위치가 돌이나 물웅덩이면 진행 불가
 * 2이면 고슴도치이므로 다음 위치가 가지 않았다면 visited[y][x]가 0이므로 갈 수 있으므로 true
 */
const canMove = (type, x, y) => type  === 1 ? (visited[y][x] !== 1 && mat[y][x] !== 'D') : !visited[y][x];

/**
 * 처음에는 hedgehog와 puddles 둘을 탐색하는 BFS 함수를 2개를 만들었으나
 * 공통부분을 추출하여 하나의 함수로 변경
 */
const search = (source, type) => {
    // 임시로 다음 탐색 위치를 담을 큐
    const temp = [];
    // 물웅덩이나 고슴도치의 위치들을 순회하면서 탐색
    // 더 이상 탐색가능한 위치가 없으면 도달 불가능함
    // 길이가 0이므로 0을 반환
    while (source.length) {
        const [x, y] = source.shift();
        visited[y][x] = type;

        for (const [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny) || !canMove(type, nx, ny)) continue;
            // 반환 값이 1이면 도달한 경우
            if (type === 2 && mat[ny][nx] === 'D') return 1;
            visited[ny][nx] = type;
            temp.push([nx, ny]);
        }
    }
    // 탐색하고 다음 가능한 위치들을 원본 배열에 추가
    source.push(...temp);
    /**
     *  -1이면 계속 탐색 가능한 상태
     *  0이면 도달 불가능한 경우
     */
    return source.length ? -1 : 0;
}

while (done !== 1 && done !== 0) {
    search(puddles, 1);
    done = search(hedgehog, 2);
    cnt += 1;
}

console.log(done ? cnt : 'KAKTUS');
```