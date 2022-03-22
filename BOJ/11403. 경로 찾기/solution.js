const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const mat = data.map(d => d.split(' ').map(Number));
const l = +n;

for (let k = 0; k < l; k += 1) {
    for (let i = 0; i < l; i += 1) {
        for (let j = 0; j < l; j += 1) {
            if (mat[i][k] && mat[k][j]) {
                mat[i][j] = 1;
            }
        }
    }
}

console.log(mat.map(m => m.join(' ')).join('\n'));