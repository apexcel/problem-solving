const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(v => +v);
const nums = input[1].split(' ').map(v => +v);
const isVisited = Array(n).fill(0);
let temp = [], max = -1;

function solution(picked) {
    if (picked === 3) {
        const sum = temp.reduce((acc, cur) => acc + cur, 0);
        if (sum <= m && sum > max) max = sum;
        return;
    }

    for (let i = 0; i < n; i += 1) {
        if (!isVisited[i]) {
            isVisited[i] = 1;
            temp.push(nums[i]);
            solution(picked + 1);
            temp.pop();
            isVisited[i] = 0;
        }
    }
}

solution(0);
console.log(max);