---
문제번호: 12100
문제이름: '2048 (Easy)'
주소: 'https://www.acmicpc.net/problem/12100'
분류: ['구현', '브루트포스 알고리즘', '시뮬레이션', '백트랙킹']
---

## 첫 번째 풀이

빡구현 + 백트랙킹(DFS)

```js
const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const SIZE = +n;
const board = data.map(d => d.split(' ').map(Number));

/**
 * Array[y1][x1]에 Array[y2][x2]의 값을 더하고 Array[y2][x2]를 0으로 바꿈
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
const merge = (board, x1, y1, x2, y2) => {
    // target 값이 0이 아니면서 서로 값이 다르면 합칠 수 없으므로 중지
    if (board[y2][x2] !== 0 && board[y1][x1] !== board[y2][x2]) {
        return true;
    }
    // 합치고 나면 또 합치면 안되기 때문에 중지
    if (board[y1][x1] === board[y2][x2]) {
        board[y1][x1] += board[y2][x2];
        board[y2][x2] = 0;
        return true;
    }
    return false;
}

/**
 * Array[y1][x1]이 빈 공간이면 Array[y2][x2]의 값으로 변경하고 Array[y2][x2]를 0으로 바꿈
 * 변경 성공시 true
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {boolean}
 */
const cleanUp = (board, x1, y1, x2, y2) => {
    if (board[y1][x1] === 0) {
        board[y1][x1] = board[y2][x2];
        board[y2][x2] = 0;
        return true;
    }
    return false;
}

const copy = board => {
    return board.map(row => row.slice());
}

const findMaxValue = board => {
    let ret = 0;
    board.forEach(row => row.forEach(x => ret = x > ret ? x : ret));
    return ret;
}

const onMoveUpIterate = (board) => {
    for (let x = 0; x < SIZE; x += 1) {

        for (let y = 0; y < SIZE; y += 1) {
            for (let i = y + 1; i < SIZE; i += 1) {
                if (merge(board, x, y, x, i)) break;
            }
        }

        for (let y = 0; y < SIZE; y += 1) {
            for (let i = y + 1; i < SIZE; i += 1) {
                cleanUp(board, x, y, x, i)
            }
        }

    }
    return board;
}

const onMoveRightIterate = (board) => {
    for (let y = 0; y < SIZE; y += 1) {

        for (let x = SIZE - 1; x >= 0; x -= 1) {
            for (let i = x - 1; i >= 0; i -= 1) {
                if (merge(board, x, y, i, y)) break;
            }
        }

        for (let x = SIZE - 1; x >= 0; x -= 1) {
            for (let i = x - 1; i >= 0; i -= 1) {
                cleanUp(board, x, y, i, y);
            }
        }
    }
    return board;
}

const onMoveDownIterate = (board) => {
    for (let x = 0; x < SIZE; x += 1) {

        for (let y = SIZE - 1; y >= 0; y -= 1) {
            for (let i = y - 1; i >= 0; i -= 1) {
                if (merge(board, x, y, x, i)) break;
            }
        }

        for (let y = SIZE - 1; y >= 0; y -= 1) {
            for (let i = y - 1; i >= 0; i -= 1) {
                cleanUp(board, x, y, x, i);
            }
        }
    }
    return board;
}

const onMoveLeftIterate = (board) => {
    for (let y = 0; y < SIZE; y += 1) {

        for (let x = 0; x < SIZE; x += 1) {
            for (let i = x + 1; i < SIZE; i += 1) {
                if (merge(board, x, y, i, y)) break;
            }
        }

        for (let x = 0; x < SIZE; x += 1) {
            for (let i = x + 1; i < SIZE; i += 1) {
                cleanUp(board, x, y, i, y)
            }
        }
    }

    return board;
}

const ops = [
    onMoveUpIterate,
    onMoveRightIterate,
    onMoveDownIterate,
    onMoveLeftIterate
];

let res = 0;
const DFS = (depth, board) => {
    if (depth === 5) {
        res = Math.max(res, findMaxValue(board));
        return;
    }

    for (let op of ops) {
        const snapshot = op(copy(board));
        DFS(depth + 1, snapshot);
    }
}

DFS(0, board);
console.log(res);
```

## 두 번째 풀이

첫 번째 코드를 기반으로 반복문을 재사용 가능한 함수로 빼냈으나 메모리 사용량과 시간만 증가함.

```js
const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const SIZE = +n;
const board = data.map(d => d.split(' ').map(Number));

const iterate = (options, callback) => {
    const { board, x, y, type, shouldBreak } = options;

    if (type === 'increase') {
        for (let i = 0; i < SIZE; i += 1) {
            for (let j = i + 1; j < SIZE; j += 1) {
                if (callback(board, x ?? i, y ?? i, x ?? j, y ?? j) && shouldBreak) break;
            }
        }
    }
    else {
        for (let i = SIZE - 1; i >= 0; i -= 1) {
            for (let j = i - 1; j >= 0; j -= 1) {
                if (callback(board, x ?? i, y ?? i, x ?? j, y ?? j) && shouldBreak) break;
            }
        }
    }
}

/**
 * Array[y1][x1]에 Array[y2][x2]의 값을 더하고 Array[y2][x2]를 0으로 바꿈
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
const merge = (board, x1, y1, x2, y2) => {
    // target 값이 0이 아니면서 서로 값이 다르면 합칠 수 없으므로 중지
    if (board[y2][x2] !== 0 && board[y1][x1] !== board[y2][x2]) {
        return true;
    }
    // 합치고 나면 또 합치면 안되기 때문에 중지
    if (board[y1][x1] === board[y2][x2]) {
        board[y1][x1] += board[y2][x2];
        board[y2][x2] = 0;
        return true;
    }
    return false;
}

/**
 * Array[y1][x1]이 빈 공간이면 Array[y2][x2]의 값으로 변경하고 Array[y2][x2]를 0으로 바꿈
 * 변경 성공시 true
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {boolean}
 */
const cleanUp = (board, x1, y1, x2, y2) => {
    if (board[y1][x1] === 0) {
        board[y1][x1] = board[y2][x2];
        board[y2][x2] = 0;
        return true;
    }
    return false;
}

const copy = board => {
    return board.map(row => row.slice());
}

const findMaxValue = board => {
    let ret = 0;
    board.forEach(row => row.forEach(x => ret = x > ret ? x : ret));
    return ret;
}

const onMoveUpIterate = (board) => {
    for (let x = 0; x < SIZE; x += 1) {
        iterate({ board, x, type: 'increase', shouldBreak: true }, merge);
        iterate({ board, x, type: 'increase', shouldBreak: false }, cleanUp);
    }
    return board;
}

const onMoveRightIterate = (board) => {
    for (let y = 0; y < SIZE; y += 1) {
        iterate({ board, y, type: 'decrease', shouldBreak: true }, merge);
        iterate({ board, y, type: 'decrease', shouldBreak: false }, cleanUp);
    }
    return board;
}

const onMoveDownIterate = (board) => {
    for (let x = 0; x < SIZE; x += 1) {
        iterate({ board, x, type: 'decrease', shouldBreak: true }, merge);
        iterate({ board, x, type: 'decrease', shouldBreak: false }, cleanUp);
    }
    return board;
}

const onMoveLeftIterate = (board) => {
    for (let y = 0; y < SIZE; y += 1) {
        iterate({ board, y, type: 'increase', shouldBreak: true }, merge);
        iterate({ board, y, type: 'increase', shouldBreak: false }, cleanUp);
    }
    return board;
}


const ops = [
    onMoveUpIterate,
    onMoveRightIterate,
    onMoveDownIterate,
    onMoveLeftIterate
];

let res = 0;
const DFS = (depth, board) => {
    if (depth === 5) {
        res = Math.max(res, findMaxValue(board));
        return;
    }

    for (let op of ops) {
        const snapshot = op(copy(board));
        DFS(depth + 1, snapshot);
    }
}

DFS(0, board);
console.log(res);
```
