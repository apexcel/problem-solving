---
문제번호: 8896
문제이름: '가위 바위 보'
주소: 'https://www.acmicpc.net/problem/8896'
분류: ['구현']
---

# 풀이

무승부인 경우와 그렇지 않은 경우에 조건 분기를 하는 것이 어려웠다. 가위는 1, 바위는 2, 보는 3 이런식으로 숫자에 할당하여 합이 x가 되는 경우에 조건 분기를 하려 했으나 필연적으로 중복되는 숫자가 발생하여 어떻게 해야할 지 감을 잡지 못했다.

## 첫 번째 풀이

문제에 대해 찾아보면서 다른 사람의 풀이를 보고 적절하게 포팅했다. 비트 연산을 이용해 모두 같은 경우거나 모두 다른 경우를 표현한 것을 보고 놀라웠다. `sum`에 대해 `AND`연산을 통해 이미 RSP중 하나가 나와 있는 경우라면 무시하고 그렇지 않은 경우 `XOR` 연산을 통해 `sum`을 계산한다. 개인적으로 이 풀이가 멋있게 느껴지긴 하지만 두 번째 풀이가 훨씬 더 직관적인 것 같다.

```js
const [tc, ...testcases] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const useRSP = (n, matrix) => {
    const survivors = Array(n).fill(1);

    const getWinner = () => {
        let ret = 0;
        for (let i = 0; i < survivors.length; i += 1) {
            if (ret && survivors[i]) return 0;
            if (survivors[i]) ret = i + 1;
        }
        return ret;
    }

    const getSurvivors = () => survivors;

    const getMatrix = () => matrix;

    const setMatrix = (x, target) => {
        for (let y = 0; y < matrix.length; y += 1) {
            if (!survivors[y]) continue;
            if (matrix[y][x] !== target) {
                survivors[y] = 0;
            }
        }
    };

    return {
        getWinner,
        getSurvivors,
        getMatrix,
        setMatrix
    }
}

const solution = (n, mat) => {
    const store = useRSP(n, mat);
    const matrix = store.getMatrix();

    for (let x = 0; x < matrix[0].length; x += 1) {
        let sum = 0;
        for (let y = 0; y < n; y += 1) {
            if (!store.getSurvivors()[y]) continue;
            if (sum === 7) break;
            const cur = matrix[y][x];

            if (cur === 'R' && !(sum & 4)) sum ^= 4;
            else if (cur === 'S' && !(sum & 2)) sum ^= 2;
            else if (cur === 'P' && !(sum & 1)) sum ^= 1;
        }

        switch (sum) {
            case 1:
            case 2:
            case 4:
            case 7:
                continue;
            case 3: { // SP
                store.setMatrix(x, 'S');
                break;
            }
            case 5: { // PR
                store.setMatrix(x, 'P');
                break;
            }
            case 6: { // SR
                store.setMatrix(x, 'R');
                break;
            }
        }
    }
    console.log(store.getWinner());
}

for (let i = 0; i < testcases.length; i += 1) {
    const len = Number(testcases[i]);
    if (!isNaN(len)) solution(len, testcases.slice(i + 1, i + len + 1));
    i += len;
}
```

## 두 번째 풀이

RSP에 해당하는 카운터를 만들어서 가위바위보 중 2개만 나오는 경우에만 승패를 가릴 수 있기 때문에 카운터 3개 중 1개가 0인 경우에 대해서만 계산하면 된다. 이 풀이가 더 직관적인 것 같다.

```js
const [tc, ...testcases] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const useRSP = (n, matrix) => {
    const survivors = Array(n).fill(1);

    const getWinner = () => {
        let ret = 0;
        for (let i = 0; i < survivors.length; i += 1) {
            if (ret && survivors[i]) return 0;
            if (survivors[i]) ret = i + 1;
        }
        return ret;
    }

    const getSurvivors = () => survivors;

    const getMatrix = () => matrix;

    const setMatrix = (x, target) => {
        for (let y = 0; y < matrix.length; y += 1) {
            if (!survivors[y]) continue;
            if (matrix[y][x] !== target) {
                survivors[y] = 0;
            }
        }
    };

    return {
        getWinner,
        getSurvivors,
        getMatrix,
        setMatrix
    }
}

const solution = (n, mat) => {
    const store = useRSP(n, mat);
    const matrix = store.getMatrix();
    
    for (let x = 0; x < matrix[0].length; x += 1) {
        let r = 0, s = 0, p = 0;
        for (let y = 0; y < n; y += 1) {
            if (!store.getSurvivors()[y]) continue;
            const cur = matrix[y][x];

            if (cur === 'R') r += 1;
            else if (cur === 'S') s += 1;
            else if (cur === 'P') p += 1;
        }

        if (r && s && !p) store.setMatrix(x, 'R');
        else if (s && p && !r) store.setMatrix(x, 'S');
        else if (r && p && !s) store.setMatrix(x, 'P');

    }
    console.log(store.getWinner());
}

for (let i = 0; i < testcases.length; i += 1) {
    const len = Number(testcases[i]);
    if (!isNaN(len)) solution(len, testcases.slice(i + 1, i + len + 1));
    i += len;
}
```