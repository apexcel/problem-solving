const [n, t, m, ...v] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [t1, t2] = t.split(' ').map(Number);
const vertices = v.map(e => e.split(' ').map(Number));

const size = +n + 1;
const adjmat = Array.from(Array(size), () => Array(size).fill(0));

vertices.forEach(v => {
    const [from, to] = v;
    adjmat[from][to] = 1;
    adjmat[to][from] = 1;
});

const isVisited = Array(size).fill(0);
let res;

const dfs = (begin, cnt) => {
    if (begin === t2) {
        res = cnt;
        return;
    }
    for (let i = 1; i < size; i += 1) {
        if (adjmat[i][begin] && !isVisited[i]) {
            isVisited[i] = 1;
            dfs(i, cnt + 1);
        }
    }
    return;
}

dfs(t1, 0);
console.log(res ? res : -1);