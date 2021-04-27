const n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);

// 인덱스 번호는 행 해당 인덱스의 배열요소는 열이라고 가정한다.
// 바뀌어도 상관은 없다.
let board = new Array(n + 1);
let counter = 0;
const canLocate = level => {
    for (let i = 1; i < level; i += 1) {
        // 같은 열인 경우
        if (board[level] === board[i]) return false;
        // 대각선인 경우
        // 대각선일 때는 가로 거리와 세로거리가 같은 것이므로 둘의 값이 동일하다면 대각선상에 위치
        if (Math.abs(board[level] - board[i]) === Math.abs(level - i)) return false
    }
    return true;
}

const allocateQueen = level => {
    // 만약 마지막 행까지 도달한다면 겹치지 않고 놓아진 것이므로 카운터 증가
    if (level === board.length) {
        counter += 1;
        return;
    }

    // 각 행을 순회하면서
    for (let i = 1; i < board.length; i += 1) {
        // 해당 행에 열의 번호 삽입
        // 어차피 맨 첫 행은 숫자가 삽입되어야 하므로 먼저 삽입한다.
        board[level] = i;
        // 이후 조건을 만족하는지 검사
        // 조건을 만족하지 않는다면 해당 행은 다음 열로 이동
        if (canLocate(level)) {
            // 만족한다면 다음행으로 이동한다.
            allocateQueen(level + 1);
        }
    }
}

// 1행부터 시작한다
allocateQueen(1);
console.log(counter);