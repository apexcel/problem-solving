---
문제번호: 1018
문제이름: '체스판 다시 칠하기'
주소: 'https://www.acmicpc.net/problem/1018'
분류: ['브루트포스 알고리즘']
---

# 풀이

```js
function solution(col, row, board) {
    let gameBoard = Array.from(Array(8), () => Array(8));
    let res = 999;

    for (let y = 0; y <= col - 8; y += 1) {
        for (let x = 0; x <= row - 8; x += 1) {
            let wb = 0, bw = 0;

            for (let i = 0; i < 8; i += 1) {
                for (let j = 0; j < 8; j += 1) {
                    gameBoard[i][j] = board[y + i][x + j];
                }
            }

            for (let i = 0; i < 8; i += 1) {
                for (let j = 0; j < 8; j += 1) {
                    const cur = gameBoard[i][j] === 'W';
                    if ((i + j) % 2) {
                        cur ? wb += 1 : bw += 1;
                    }
                    else {
                        cur ? bw += 1 : wb += 1;
                    }
                }
            }
            res = Math.min(res, wb, bw);
        }
    }
    console.log(res);
}
```

주어진 $M × N$ 배열인 `board`에서 $8 × 8$ 배열로 옮길 때 조건에 맞는 형태로 체스판을 다시 칠할 때 가장 적게 칠하는 경우를 찾는 문제이다. 조건은 다음과 같다.

- `board[0][0]`이 'W'인 경우 첫 줄은 'WBWB...' 형태로 칠해지고 그 다음줄은 'BWBW...'형태로 칠해지며 반복된다.
- `board[0][0]`이 'B'인 경우 첫 줄은 'BWBW...' 형태로 칠해지고 그 다음줄은 'WBWB...'형태로 칠해지며 반복된다.

`board`를 $8 × 8$ 배열인 `gameBoard`로 옮겨 첫 원소가 어떤 것인지 파악한다. 이후 `gameBoard`를 순회하면서 현재 원소가 'W'인지 'B'인지, 좌표의 합이 홀수인지 짝수인지 파악한다. 만약 `gameBoard`의 가장 첫 원소가 'W'라면 짝수 좌표의 합에는 'W'가 위치해야하고 'B'라면 'B'가 위치해야한다. 현재 좌표값의 합이 홀수인데 원소는 'W' 라면 'WBWB...' 형태로 바꿀 때를 상정하여 `wb`의 값을 증가시킨다. 최종적으로 `wb`와 `bw` 중 어떤 것이 더 적게 바꾸어야 하는지 비교하면 된다.