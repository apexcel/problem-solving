---
문제번호: 3190
문제이름: '뱀'
주소: 'https://www.acmicpc.net/problem/3190'
분류: ['구현', '자료 구조', '시뮬레이션', '덱', '큐']
---

# 풀이

## 첫 번째 풀이

`shift()`, `push()` 사용

```js
const [n, k, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const SIZE = +n;
const board = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
const ops = new Map();

data.slice(0, k).forEach(d => {
    const [y, x] = d.split(' ').map(Number);
    board[y - 1][x - 1] = 1;
});
data.slice(+k + 1).map(d => {
    const [time, op] = d.split(' ');
    ops.set(+time, op === 'L' ? 3 : 1);
})

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < SIZE && x < SIZE;

const isAcross = (snake, x, y) => snake.findIndex(([sx, sy]) => sx === x && sy === y) > -1;

const move = (snake, look) => {
    const [dx, dy] = dir[look]
        , [x, y] = snake.at(-1) // 뱀의 머리
        , nx = x + dx, ny = y + dy
        , tail = snake[0]; // 뱀의 꼬리

    // 벽에 닿거나 뱀에 몸에 닿는다면 false
    if (!isValidPosition(nx, ny) || isAcross(snake, nx, ny)) return false;
    // 머리를 한 칸 이동, snake 배열에 원소 추가
    snake.push([nx, ny]);
    // 만약 머리가 이동한 부분이 사과라면 사과를 지우고
    // 사과가 아니면 꼬리 제거
    board[ny][nx] ? board[ny][nx] = 0 : snake.shift();
    return true;
}

const snake = [[0, 0]];
let time = 0, look = 1;
let go = true;
while (go) {
    if (ops.has(time)) look = (look + ops.get(time)) % 4;
    go = move(snake, look);
    time += 1;
}
console.log(time);
```

## 두 번째 풀이

배열에 그리면서 동작, 뱀의 몸이 닿는 경우에 대한 조건 검색이 달라짐

```js
const [n, k, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const SIZE = +n;
const board = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
const ops = new Map();

data.slice(0, k).forEach(d => {
    const [y, x] = d.split(' ').map(Number);
    board[y - 1][x - 1] = 1;
});
data.slice(+k + 1).map(d => {
    const [time, op] = d.split(' ');
    ops.set(+time, op === 'L' ? 3 : 1);
})

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < SIZE && x < SIZE;

const isAcross = (x, y) => board[y][x] > 1;

const move = (snake, look) => {
    const [dx, dy] = dir[look]
        , [x, y] = snake.at(-1)
        , nx = x + dx, ny = y + dy
        , tail = snake[0];

    if (!isValidPosition(nx, ny) || isAcross(nx, ny)) return false;
    // 머리가 이동한 곳이 사과가 아니라면 2차원 배열에서 꼬리지우고 snake배열에서 제거한다.
    if (!board[ny][nx]) {
        board[tail[1]][tail[0]] = 0;
        snake.shift();
    }
    // 2차원 배열에서 머리가 이동
    board[ny][nx] = 2;
    // snake배열에도 머리의 좌표 추가
    snake.push([nx, ny]);

    return true;
}

const snake = [[0, 0]];
let time = 0, look = 1, go = true;
while (go) {
    if (ops.has(time)) look = (look + ops.get(time)) % 4;
    go = move(snake, look);
    time += 1;
}
console.log(time);
```