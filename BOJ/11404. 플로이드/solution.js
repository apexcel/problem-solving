const [n, m, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const V = +n, E = +m, INF = 987654321;
const A = Array.from(Array(V), () => Array(V).fill(INF));

for (let i = 0; i < data.length; i += 1) {
    const [from, to, weight] = data[i].split(' ').map(Number);
    A[from - 1][to - 1] = Math.min(A[from - 1][to - 1], weight);
}

for (let i = 0; i < A.length; i += 1) {
    A[i][i] = 0;
}

for (let k = 0; k < A.length; k += 1) {
    for (let i = 0; i < A.length; i += 1) {
        for (let j = 0; j < A.length; j += 1) {
            A[i][j] = Math.min(A[i][j], A[i][k] + A[k][j]);
        }
    }
}

for (let i = 0; i < A.length; i += 1) {
    for (let j = 0; j < A.length; j += 1) {
        if (A[i][j] === INF) A[i][j] = 0;
    }
}


console.log(A.reduce((acc, cur) => acc + cur.join(' ') + '\n', ''));