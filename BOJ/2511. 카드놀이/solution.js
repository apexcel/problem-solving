const [alpha, beta] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));
let score = [0, 0], lastest = 'D';
alpha.forEach((a, i) => {
    const b = beta[i];
    if (a > b) {
        score[0] += 3;
        lastest = 'A';
    }
    else if (b > a) {
        score[1] += 3;
        lastest = 'B';
    }
    else {
        score[0] += 1;
        score[1] += 1;
    }
});
const res = score[0] > score[1] ? 'A' : score[0] < score[1] ? 'B' : lastest;
console.log(...score)
console.log(res);