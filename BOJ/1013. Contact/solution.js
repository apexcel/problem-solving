const [n, ...testcases] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const isSubmarine = pattern => {
    const X = 9;
    const table = [
        [5, 1], // 0
        [2, X], // 1
        [3, X], // 2
        [3, 4], // 3
        [5, 7], // 4
        [X, 6], // 5
        [5, 1], // 6
        [8, 7], // 7
        [3, 6], // 8
        [X, X]
    ];

    let state = 0;
    for (let p of pattern) {
        state = table[state][p];
    }
    return state === 4 || state === 6 || state === 7;
}

console.log(testcases.map(t => isSubmarine(t) ? 'YES' : 'NO').join('\n'));