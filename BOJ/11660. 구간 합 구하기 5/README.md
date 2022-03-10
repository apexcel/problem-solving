---
문제번호: 11660
문제이름: '구간 합 구하기 5'
주소: 'https://www.acmicpc.net/problem/11660'
분류: ['다이나믹 프로그래밍', '누적 합']
---

# 풀이

## 첫 번째 풀이

이차원 배열의 누적 합을 가로 세로 반복하며 구함.

```js
const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);

const matrix = data.splice(0, n).map(d => d.split(' ').map(Number));
const coords = data.map(d => d.split(' ').map(v => v - 1));

const prefixSumGrid = (arr, n) => {
    const psum = [];
    let tmp;
    for (let y = 0; y < n; y += 1) {
        tmp = [arr[y][0]];
        for (let i = 1; i < n; i += 1) {
            tmp[i] = tmp[i - 1] + arr[y][i];
        }
        psum[y] = tmp;
    }

    for (let y = 1; y < n; y += 1) {
        for (let i = 0; i < n; i += 1) {
            psum[y][i] += psum[y - 1][i];
        }
    }

    return psum;
};

const gridSum = (psumGrid, y1, x1, y2, x2) => {
    let ret = psumGrid[y2][x2];
    if (y1 > 0) ret -= psumGrid[y1 - 1][x2];
    if (x1 > 0) ret -= psumGrid[y2][x1 - 1];
    if (y1 > 0 && x1 > 0) ret += psumGrid[y1 - 1][x1 - 1];
    return ret;
}

const grid = prefixSumGrid(matrix, n);
const res = coords.map(c => gridSum(grid, ...c)).join('\n');

console.log(res);
```

## 두 번째 풀이

0행 0열을 0으로 채우고 1행 1열부터 누적 합을 구하는 방법.

```js
const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);

const matrix = data.splice(0, n).map(d => d.split(' ').map(Number));
const coords = data.map(d => d.split(' ').map(Number));

const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i += 1) {
    const row = matrix[i - 1];
    for (let j = 1; j <= n; j += 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + row[j - 1] - dp[i - 1][j - 1];
    }
}

const gridSum = (y1, x1, y2, x2) => {
    return dp[y2][x2] -dp[y1 - 1][x2] - dp[y2][x1 - 1] + dp[y1 - 1][x1 - 1];
}

const res = coords.map(c => gridSum(...c)).join('\n');

console.log(res);
```