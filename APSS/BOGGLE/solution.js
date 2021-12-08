const board = `URLPM
XPRET
GIAET
XTNZY
XOQRS`.split('\n');

const words = `PRETTY
GIRL
REPEAT
KARA
PANDORA
GIAZAPX`.split('\n');

let dp = Array.from(Array(5), () => Array(5).fill(Array(10).fill(-1)));
const dir = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1]
];

function check(x, y, word, index) {
    if (y < 0 || x < 0 || y >= 5 || x >= 5) return 0;
    if (dp[y][x][index] !== -1) return dp[y][x][index];
    if (board[y][x] !== word[index]) return 0;
    dp[y][x][index] = 1;

    if (index === word.length - 1) return 1;

    for (let i = 0; i < dir.length; i += 1) {
        const [dx, dy] = dir[i];
        const nx = x + dx, ny = y + dy;
        if (check(nx, ny, word, index + 1)) return 1;
    }

    return dp[y][x][index] = 0;
}

function solution(word) {
    dp = Array.from(Array(5), () => Array(5).fill(Array(10).fill(-1)));
    for (let y = 0; y < 5; y += 1) {
        for (let x = 0; x < 5; x += 1) {
            if (check(x, y, word, 0)) return true;
        }
    }
    return false;
}

words.map(word => console.log(word, solution(word)));