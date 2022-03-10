const [len, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const pairs = data.map(d => d.split(' ').map(Number));

const solution = (end, pairs) => {
    let begin = 0, half = 0;
    const { abs } = Math;

    const fold = (left, right) => {
        if (left === right) return;
        half = (left + right) / 2;

        const leftSide = half, rightSide = abs(abs(end - begin) - half);
        begin += half;
        if (leftSide > rightSide) {
            end += abs(rightSide - leftSide);
        }

        for (let pair of pairs) {
            [pair[0], pair[1]] = [abs(pair[0] - half), abs(pair[1] - half)]
        }
    }

    pairs.forEach(([a, b]) => fold(a, b));

    console.log((end - begin).toFixed(1));
}

solution(+len, pairs);