---
문제번호: 11729
문제이름: '하노이 탑 이동 순서'
주소: 'https://www.acmicpc.net/problem/11729'
분류: ['재귀']
---

# 풀이

## 첫 번째 풀이

그냥 풀이

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
let cnt = 0, res = '';
const hanoi = (n, from, to, by) => {
    if (n === 0) return;
    hanoi(n - 1, from, by, to);
    cnt += 1;
    res += from + ' ' + to + '\n';
    hanoi(n - 1, by, to, from);
};
```

## 두 번째 풀이

클로저 한 번 사용해봄

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const result = () => {
    let cnt = 0, str = '';
    const add = (k, move) => {
        cnt += k;
        str += move + '\n';
    };
    const get = () => ({ cnt, str });
    return { add, get };
};

const res = result();

const hanoi = (n, from, to, by) => {
    if (n === 1) {
        res.add(1, from + ' ' + to);
        return;
    }
    hanoi(n - 1, from, by, to);
    res.add(1, from + ' ' + to);
    hanoi(n - 1, by, to, from);
};

hanoi(n, '1', '3', '2')
console.log(res.get().cnt);
console.log(res.get().str);
```