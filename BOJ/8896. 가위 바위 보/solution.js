const [tc, ...testcases] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const useRSP = (n, matrix) => {
    const survivors = Array(n).fill(1);

    const getWinner = () => {
        let ret = 0;
        for (let i = 0; i < survivors.length; i += 1) {
            if (ret && survivors[i]) return 0;
            if (survivors[i]) ret = i + 1;
        }
        return ret;
    }

    const getSurvivors = () => survivors;

    const getMatrix = () => matrix;

    const setMatrix = (x, target) => {
        for (let y = 0; y < matrix.length; y += 1) {
            if (!survivors[y]) continue;
            if (matrix[y][x] !== target) {
                survivors[y] = 0;
            }
        }
    };

    return {
        getWinner,
        getSurvivors,
        getMatrix,
        setMatrix
    }
}

const solution = (n, mat) => {
    const store = useRSP(n, mat);
    const matrix = store.getMatrix();
    
    for (let x = 0; x < matrix[0].length; x += 1) {
        let r = 0, s = 0, p = 0;
        for (let y = 0; y < n; y += 1) {
            if (!store.getSurvivors()[y]) continue;
            const cur = matrix[y][x];

            if (cur === 'R') r += 1;
            else if (cur === 'S') s += 1;
            else if (cur === 'P') p += 1;
        }

        if (r && s && !p) store.setMatrix(x, 'R');
        else if (s && p && !r) store.setMatrix(x, 'S');
        else if (r && p && !s) store.setMatrix(x, 'P');

    }
    console.log(store.getWinner());
}

for (let i = 0; i < testcases.length; i += 1) {
    const len = Number(testcases[i]);
    if (!isNaN(len)) solution(len, testcases.slice(i + 1, i + len + 1));
    i += len;
}