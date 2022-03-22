---
문제번호: 2580
문제이름: '스도쿠'
주소: 'https://www.acmicpc.net/problem/2580'
분류: ['백트래킹']
---

# 풀이

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const board = input.map((row, y) => row.split(' ').map(Number));
const SIZE = 9;

const sudoku = (cnt) => {
    // 스도쿠는 정방행렬이므로 81개가 카운팅되었다면 종료
    if (cnt === SIZE * SIZE) {
        console.log(board.map(b => b.join(' ')).join('\n'));
        process.exit();
    }

    // x와 y의 값은 서로 변환 가능, 
    // 중요한 것은 한 변수는 값이 SIZE를 넘어설 때마다 바뀌고 다른 변수는 함수 호출마다 값이 바뀐다는 것
    const x = cnt % SIZE, y = Math.floor(cnt / SIZE);

    if (!board[y][x]) {
        // 해당 좌표에 대해 1~9까지의 수를 검사
        for (let i = 1; i <= SIZE; i += 1) {
            // 할당 가능한 값이라면
            if (isFollowRule(x, y, i)) {
                // i값 할당
                board[y][x] = i;
                sudoku(cnt + 1);
                // 만약 board[y][x]가 0인데 할당 가능한 값이 없으면
                // 이 부분으로 돌아오므로 0으로 초기화
                board[y][x] = 0;
            }
        }
        // board[y][x]가 0이면서 할당 가능한 값이 없으므로 함수는 종료 (백트랙킹)
    }
    else sudoku(cnt + 1);
}

// 좌표 (x, y)에 대해 k값을 검사
const isFollowRule = (x, y, k) => {
    // 수직이나 수평에 대해서 k값이 존재하면 false
    for (let i = 0; i < SIZE; i += 1) {
        if (board[y][i] === k || board[i][x] === k) return false;
    }

    // 주어진 좌표 (x, y) 대비 bx, by는 해당 좌표가 속하는 3x3행렬의 좌상단의 원점이다.
    // 주어진 좌표가 (1, 1)이라면 원점은 (0, 0)이므로 3x3행렬의 종료점은 (2, 2)가 될 것이다.
    // 3x3행렬내에 k값이 중복되면 false
    const bx = x - (x % 3), by = y - (y % 3);
    for (let i = by; i <= by + 2; i += 1) {
        for (let j = bx; j <= bx + 2; j += 1) {
            if (board[i][j] === k) return false;
        }
    }

    // 모든 검사를 통과한다면 true
    return true;
}

sudoku(0);
```