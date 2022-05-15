let SIZE;
const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < SIZE && x < SIZE;

const BFS = (board, cx, cy) => {
    const dir = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    const state = Array.from(Array(4), () => Array.from(Array(SIZE), () => Array(SIZE).fill(Infinity)))
    state[0][0][0] = state[1][0][0] = 0;
    const q = [[cx, cy, 0], [cx, cy, 1]];

    while (q.length) {
        const [x, y, look] = q.shift();

        for (let i = 0; i < 4; i += 1) {
            const nx = x + dir[i][0], ny = y + dir[i][1];
            if (!isValidPosition(nx, ny) || board[ny][nx]) continue;

            const next = state[i][ny][nx]
                , straight = state[look][y][x] + 100
                , corner = state[look][y][x] + 600;

            if (look === i) {
                if (next > straight) {
                    state[i][ny][nx] = straight;
                    q.push([nx, ny, i]);
                }
            }
            else {
                if (next > corner) {
                    state[i][ny][nx] = corner;
                    q.push([nx, ny, i]);
                }
            }
        }
    }
    let ret = state[0][SIZE - 1][SIZE - 1]
    for (let i = 1; i < 4; i += 1) {
        ret = Math.min(ret, state[i][SIZE - 1][SIZE - 1]);
    }
    return ret;
}

function solution(board) {
    SIZE = board.length;
    return BFS(board, 0, 0);
}

// solution([[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]])
solution([[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]])