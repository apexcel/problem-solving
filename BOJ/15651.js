/**
 * 중복 순열 문제
 * Permutation with repetition
 * 서로 다른 원소 중 중복을 허용하여 r개를 뽑아 한 줄로 나열하는 경우의 수
 * n^r 가지의 경우의 수가 나온다.
 */

const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => parseInt(v, 10));
const [n, m] = sc;
let temp = [];
let print = '';

const dfs = (k) => {
    if (k === m) {
        print += `${temp.join(' ')}\n`;
        return;
    }
    for (let i = 1; i <= n; i += 1) {
        temp.push(i);
        dfs(k+1);
        temp.pop();
    }
};

dfs(0);
console.log(print);
