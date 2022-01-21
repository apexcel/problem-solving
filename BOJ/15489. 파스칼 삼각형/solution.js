let [r, c, w] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let line = [[1]];
const n = r + w - 1;

for (let i = 1; i < n; i += 1) {
    let temp = [1];
    for (let j = 1; j < i; j += 1) {
        temp[j] = line[i - 1][j - 1] + line[i - 1][j];
    }
    temp.push(1);
    line[i] = temp;
}

let sum = 0;
for (let i = r - 1, j = 1; i < n; i += 1, j += 1) {
    for (let k = 0; k < j; k += 1) {
        sum += line[i][c + k - 1];
    }
}
console.log(sum);
