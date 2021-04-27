// https://programmers.co.kr/learn/courses/30/lessons/64061

let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
],
    moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
    const size = board.length;
    let cnt = 0, stack = [];
    moves = moves.map(el => el - 1);

    for (let dep = 0; dep < size; dep++) {
        if (moves.length === 0) break;
        if (board[dep][moves[0]] !== 0) {
            stack.push(board[dep][moves[0]]);
            board[dep][moves[0]] = 0;
            moves = moves.slice(1);
            dep = -1;
        }
        else if (board[dep][moves[0]] === 0 && dep === size - 1) {
            moves = moves.slice(1);
            dep = -1;
        }
    }

    for (let i = 1; i <= stack.length; i++) {
        if (stack[i] === stack[i-1]) {
            stack[i] = 0; stack[i-1] = 0;
            stack = stack.filter(el => el !== 0);
            cnt += 2;
            i = 0;
        }
    }
    return cnt;
}

solution(board, moves);