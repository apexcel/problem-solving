---
문제번호: 2661
문제이름: '좋은 수열'
주소: 'https://www.acmicpc.net/problem/2661'
분류: ['백트랙킹']
---

# 풀이

## 첫 번째 풀이

비교하는 알고리즘을 어떻게 최적화할 지 몰라서 이중 for문으로 대충 집어넣었다. 근데 AC됨.

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const list = [1, 2, 3];

const res = [];
const pick = (depth) => {
    if (n === depth) {
        console.log(res.join(''));
        process.exit();
    }

    loop: for (let i = 0; i < 3; i += 1) {
        res.push(list[i]);
        for (let j = 1; j <= Math.floor(res.length / 2); j += 1) {
            for (let k = 0; k + j < res.length; k += 1) {
                const a = res.slice(k, k + j).join('');
                const b = res.slice(k + j, k + (2 * j)).join('');
                if (a === b) {
                    res.pop();
                    continue loop;
                }
            }
        }

        pick(depth + 1);
        res.pop();
    }
}
pick(0);
```

## 두 번째 풀이

다른 사람 풀이를 보고 비교하는 알고리즘 개선 후 함수로 분리

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const list = [1, 2, 3];
const res = [];

const isValid = seq => {
    const len = seq.length;
    // 절반까지 검사를 통과한다면 더 이상 검사할 필요가 없음
    for (let i = 1; i <= Math.floor(len / 2); i += 1) {
        // 1개씩 검사를 시작하고 순회를 할 때마다
        // 검사하는 길이가 늘어남
        const a = seq.slice(len - i * 2, len - i).join('');
        const b = seq.slice(len - i, len).join('');
        if (a === b) return false;
    }
    return true;
}

const pick = (depth) => {
    if (n === depth) {
        console.log(res.join(''));
        process.exit();
    }

    for (let i = 0; i < 3; i += 1) {
        res.push(list[i]);
        if (!isValid(res)) {
            // 검사에 실패하면 추가된 것 제거 해주어야 함
            res.pop();
            continue;
        }
        pick(depth + 1);
        res.pop();
    }
}

pick(0);
```