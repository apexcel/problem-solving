const board1 = [
    '#.....#',
    '#.....#',
    '##...##'
];

const board2 = [
    '#.....#',
    '#.....#',
    '##..###'
];

const board3 = [
    '##########',
    '#........#',
    '#........#',
    '#........#',
    '#........#',
    '#........#',
    '#........#',
    '##########'
];

function genBoard(h, w, source) {
    const ret = Array.from(Array(h), () => Array(w));
    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            ret[y][x] = source[y][x] === '#' ? 0 : 1;
        }
    }
    return ret;
}

function solution(h, w, board) {
    const totalCount = board.reduce((sum, str) => sum += Array.prototype.filter.call(str, char => char === '.').length, 0);
    if (totalCount % 3) return false;

    const shapes = [
        [[0, 0], [1, 0], [1, 1]], // ▜
        [[0, 0], [0, 1], [-1, 1]],// ▟ 
        [[0, 0], [0, 1], [1, 1]], // ▙
        [[0, 0], [1, 0], [0, 1]], // ▛
    ];
    const matrix = genBoard(h, w, board);

    const findBeginPos = () => {
        let pos = [-1, -1];
        for (let y = 0; y < h; y += 1) {
            for (let x = 0; x < w; x += 1) {
                if (matrix[y][x] === 1) {
                    return pos = [x, y];
                }
            }
        }
        return pos;
    };

    const isPossible = (x, y, shape) => {
        for (let i = 0; i < 3; i += 1) {
            const [dx, dy] = shape[i];
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= w || ny >= h || matrix[ny][nx] !== 1) return false;
        }
        return true;
    };

    const cover = () => {
        const [x, y] = findBeginPos();
        if (y === -1) return 1;

        let cnt = 0;
        for (let i = 0; i < 4; i += 1) {
            const shape = shapes[i];
            if (isPossible(x, y, shape)) {
                shape.forEach(([dx, dy]) => matrix[y + dy][x + dx] = 2);
                cnt += cover();
                shape.forEach(([dx, dy]) => matrix[y + dy][x + dx] = 1);
            }
        }
        return cnt;
    };

    console.log(cover());
}

solution(3, 7, board1)
solution(3, 7, board2)
solution(8, 10, board3)