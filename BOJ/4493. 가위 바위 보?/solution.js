const [tc, ...testcases] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const table = { 'R': 0, 'S': 1, 'P': 2 };

const solution = (round, rsp) => {
    const score = [0, 0];
    for (let i = 0; i < round; i += 1) {
        const [p1, p2] = rsp[i].split(' ');
        
        if ((table[p1] + 1) % 3 === table[p2]) score[0] += 1;
        else if ((table[p2] + 1) % 3 === table[p1]) score[1 ] += 1;
    }
    return score[0] !== score[1] ? score[0] > score[1] ? 'Player 1' : 'Player 2' : 'TIE';
}

let res = '';
for (let i = 0; i < testcases.length; i += 1) {
    const len = Number(testcases[i]);
    if (!isNaN(len)) {
        res += solution(len, testcases.slice(i + 1, i + len + 1)) + '\n';
    }
    i += len;
}
console.log(res);