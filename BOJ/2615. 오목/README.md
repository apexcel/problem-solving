---
문제번호: 2615
문제이름: '오목'
주소: 'https://www.acmicpc.net/problem/2615'
분류: ['구현', '브루트포스 알고리즘']
---

# 풀이

1. 육목이상일 때의 조건을 잘 처리하는 것.
    - 현재 좌표에서 오목이 형성됐다고 해도 육목을 만들 수 있는 경우를 파악해야함.
    - 예컨대 행 `0 a x x x x x 0`에서 `x`가 오목을 이루어도 `a`가 `x`인 경우
2. 만약 오목일 경우 가장 왼쪽이면서 맨 위의 좌표를 출력 할 것.

```js
const board = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));

// 수직 방향으로 탐색하므로 다음방향만 탐색한다.
const dir = [
    // 우상향대각
    [[1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [-1, 1]],
    // 수평 우측
    [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [-1, 0]],
    // 우하향대각
    [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [-1, -1]],
    // 수직 아래
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
            const [bx, by] = [d[5][0] + x, d[5][1] + y]; // 시작 지점에서 육목 검사
            const [ex, ey] = [d[4][0] + x, d[4][1] + y]; // 종료 지점에서 육목 검사
            const nx = x + dx, ny = y + dy;
            if (!inBoundary(nx, ny) || isDiffer(currentColor, nx, ny) // 좌표를 벗어나거나 색깔이 다른 경우
                || (inBoundary(ex, ey) && !isDiffer(currentColor, ex, ey)) // 종료 지점에서 육목
                || (inBoundary(bx, by) && !isDiffer(currentColor, bx, by)) // 시작 지점에서 육목
                ) continue loop;
        }
        if (i === 4) {
            return true; // 검사를 모두 통과
        }
    }
    return false; // 앞서 리턴이 되지 않은 경우는 오목이 아닌 경우이므로
}

// 수직 방향부터 탐색하고 수평 방향으로 탐색
for (let x = 0; x < 19; x += 1) {
    for (let y = 0; y < 19; y += 1) {
        // 0인 경우 무시
        if (!board[y][x]) continue;
        if (isOmok(x, y)) {
            console.log(board[y][x]);
            console.log(y + 1, x + 1);
            process.exit();
        }
    }
}
console.log(0);
```