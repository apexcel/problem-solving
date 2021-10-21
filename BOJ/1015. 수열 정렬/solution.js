const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(
    input[1].split(' ')
    .map((v, i) => ({ idx: i, val: +v }))
    .sort((a, b) => a.val - b.val || a.idx - b.idx)
    .reduce((acc, cur, i) => {
        acc[cur.idx] = i;
        return acc;
    }, [])
    .join(' ')
);