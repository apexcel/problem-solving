const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let str = '';

const sum = (x) => {
    let res = 0;
    for (let i = 0; i < x; i += 1) res += (i + 1);
    return res;
};

for (let i = 1; i < input.length; i += 1) {
    let total = 0, seq = 0;
    for (let j = 0; j < input[i].length; j += 1) {
        if (input[i][j] === 'O') seq += 1;
        else {
            total += sum(seq);
            seq = 0;
        }
    }
    if (seq) total += sum(seq);
    str += total + '\n';
}

console.log(str);