const [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let line = [1];

for (let i = 1; i < n; i += 1) {
    let temp = [1];
    for (let j = 1; j < i; j += 1) {
        temp[j] = line[j - 1] + line[j];
    }
    temp.push(1);
    line = temp.slice();
}
console.log(line[k - 1]);
