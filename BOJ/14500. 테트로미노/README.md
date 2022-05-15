---
문제번호: 14500
문제이름: '테트로미노'
주소: 'https://www.acmicpc.net/problem/14500'
분류: ['구현', '브루트포스 알고리즘']
---

# 풀이

처음에는 모든 테트로미노를 이용해 배열을 모두 채울 수 있는 경우를 구한다음 각각의 최대 값을 구하는 문제인 줄 알았다. 근데 1개만 놓는거였음. 좌표 구해서 구현하거나 DFS로 풀이하면 된다. 시간 단축을 위해서 주어진 배열내 최대 값을 구하고 그 값을 이용해 early return을 할 수 있다.

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const board = data.map(d => d.split(' ').map(Number));

// 주어진 n by m 배열 내 최대 값을 찾음
const maxElement = board.flat().reduce((acc, cur) => acc = acc >= cur ? acc : cur, 0);

const isVisited = Array.from(Array(n), () => Array(m).fill(0));

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < n && x < m;

// T자형 테트로미노 케이스에 대해 처리
// dir배열을 수정해서 DFS내에서도 처리 가능하다
const teeTetromino = (x, y) => {
    let ret = 0;
    loop: for (let i = 0; i < 4; i += 1) {
        let sum = board[y][x];
        for (let j = 0; j < 3; j += 1) {
            const [dx, dy] = dir[(i + j) % 4];
            const nx = x + dx, ny = y + dy;
            if (!isValidPosition(nx, ny)) continue loop;
            sum += board[ny][nx];
        }
        ret = Math.max(ret, sum);
    }
    return ret;
}

let dsum = 0, maxSum = 0;
const dfs = (x, y, depth) => {
    if (depth === 4) {
        maxSum = Math.max(maxSum, dsum);
        return;
    }
    // 지금까지 찾은 값 + 남은 depth * maxElement의 값이 
    // maxSum보다 작다면 더 구해봐야 의미가 없으므로 바로 리턴
    if (maxSum > maxElement * (4 - depth) + dsum) {
        return;
    }
    dsum += board[y][x];
    isVisited[y][x] = 1;
    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (!isValidPosition(nx, ny) || isVisited[ny][nx]) continue;
        dfs(nx, ny, depth + 1);
    }
    isVisited[y][x] = 0;
    dsum -= board[y][x];
}

for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < m; x += 1) {
        // T 테트로미노의 값과 maxSum 비교
        maxSum = Math.max(maxSum, teeTetromino(x, y));
        dfs(x, y, 0);
    }
}

console.log(maxSum);
```