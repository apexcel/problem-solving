const [tc, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const solution = (ops, arr) => {
    let isReversed = false;
    let begin = 0, end = arr.length;
    
    for (let op of ops) {
        if (op === 'R') {
            isReversed = !isReversed;
            continue;
        }
        if (end <= 0 || begin >= end) return 'error';
        isReversed ? end -= 1 : begin += 1;
    }
    arr = arr.slice(begin, end);
    return `[${isReversed ? arr.reverse() : arr}]`;
}

let res = '';
for (let i = 0; i < data.length; i += 3) {
    res += solution(data[i], JSON.parse(data[i + 2])) + '\n';
}
console.log(res);