const case1 = [
    'URLPM',
    'XPRET',
    'GIAET',
    'XTNZY',
    'XOQRS'
], case2 = [
    'NNNNS',
    'NEEEN',
    'NEYEN',
    'NEEEN',
    'NEEEN'
];

const lenX = case1[0].length, lenY = case1.length;

const ax = [-1, 0, 1, 1, 1, 0, -1, -1];
const ay = [-1, -1, -1, 0, 1, 1, 1, 0];
/*
x, y의 중앙이 0, 0일때 좌상단부터 시계방향으로 회전할 때.
-1,-1 | 0,-1 | 1,-1
-1, 0 | 0, 0 | 1, 0
-1, 1 | 0, 1 | 1, 1
*/

// x,y 단어의 시작 좌표, word 단어
const hasWord = (x: number, y: number, word: string) => {
    if (x < 0 || y < 0 || x > lenX || y > lenY) return false;
    if (case1[x][y] !== word[0]) return false;
    if (word.length === 1) return true;
    for (let i = 0; i < 8; i += 1) {
        const nextX = x + ax[i], nextY = y + ay[i];
        if (hasWord(nextX, nextY, word.substring(1))) {
            return true;
        }
    }

    return false;
}

console.log(hasWord(1, 1, 'PRETTY'))