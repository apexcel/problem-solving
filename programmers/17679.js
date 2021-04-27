// https://programmers.co.kr/learn/courses/30/lessons/17679

const pos = [1, 0, 0, 1, 1, 1];

const isSameBlocks = (y, x, myBoard, m, n) => {
    if (y < 0 || x < 0 || y + 1 >= m || x + 1 >= n) return false;
    if (myBoard[y][x] === ' ') return false;
    let canDelete = true;
    for (let i = 0; i < pos.length; i += 2) {
        const dy = pos[i], dx = pos[i + 1];
        if ((myBoard[y][x]).toUpperCase() !== (myBoard[y + dy][x + dx]).toUpperCase()) {
            canDelete = false;
        }
    }
    return canDelete;
};

const toLower = (y, x, myBoard) => {
    const smallChar = myBoard[y][x].toLowerCase();
    myBoard[y][x] = smallChar;
    for (let i = 0; i < pos.length; i += 2) {
        const dy = pos[i], dx = pos[i + 1];
        myBoard[y + dy][x + dx] = smallChar;
    }
    return;
}

const solution = (m, n, board) => {
    const width = m, height = n;
    let hasSameBlock = false;
    let poppedBlocks = 0;

    let myBoard = Array.from(Array(m), () => Array(n));
    board.map((str, i) => {
        for (let j in str) {
            myBoard[i][j] = str[j];
        }
    })

    do {
        hasSameBlock = false;
        for (let i = 0; i < width; i += 1) {
            for (let j = 0; j < height; j += 1) {
                if (isSameBlocks(i, j, myBoard, m, n)) {
                    toLower(i, j, myBoard);
                    hasSameBlock = true;
                }
            }
        }

        if (hasSameBlock) {
            for (let i = 0; i < width; i += 1) {
                for (let j = 0; j < height; j += 1) {
                    if (myBoard[i][j].charCodeAt(0) >= 97 && myBoard[i][j].charCodeAt(0) <= 122) {
                        poppedBlocks += 1;
                        myBoard[i][j] = ' ';
                        for (let k = i - 1; k >= 0; k -= 1) {
                            let temp = myBoard[k][j];
                            myBoard[k][j] = myBoard[k + 1][j];
                            myBoard[k + 1][j] = temp;
                        }
                    }
                }
            }
        }
        // console.log(myBoard)
        // console.log(poppedBlocks)

    } while (hasSameBlock);

    return poppedBlocks;
};