const [n, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const res = [];
const arr = nums.reduce((acc, cur) => {
    acc.push(+cur);
    return acc;
}, [0]);

const find = idx => {
    const isVisited = Array(+n + 1).fill(0);
    let i = idx, cur = arr[idx];

    while (!isVisited[i]) {
        if (cur == idx) {
            res.push(idx);
            return;
        };
        isVisited[i] = 1;
        i = cur;
        cur = arr[i]
    }
}

for (let i = 1; i <= +n; i += 1) {
    find(i);
}

console.log(res.length);
console.log(res.join('\n'));