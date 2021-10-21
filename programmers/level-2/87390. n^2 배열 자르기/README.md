---
문제번호: 87390
문제이름: 'n^2 배열 자르기'
주소: 'https://programmers.co.kr/learn/courses/30/lessons/87390'
분류: ['구현']
---

# 풀이

## 첫 번째 풀이

```js
function solution(n, left, right) {
    const res = [];
    let begin = 1,
        next = 1,
        flag = false;

    for (let i = 1; i <= right + 1; i += 1) {
        if (i - 1 >= left) {
            res.push(next);
        }
        if (i % n === 0) {
            begin += 1;
            next = begin;
            flag = false;
            continue;
        }
        if (i % n === begin) {
            flag = true
        }
        if (flag) {
            next += 1;
        }
    }
    return res;
}
```

무지성 구현으로 1차원 배열로 만들어서 풀이하려고 했으나 `n` 값을 고려하지 않아서 TLE로 터져버렸다.

## 두 번째 풀이

종이에 배열을 그리면서 생각해보니 나누기와 나머지 연산으로 좌표로 나타내어 계산 가능하다는 것을 깨달음.
y축 값은 `Math.floor(val / n)`으로 x축 값은 `val % n`으로 구할 수 있다.
`x, y`의 좌표 중 둘 중 더 큰 값 + 1이 좌표의 값이 된다.

```js
function solution(n, left, right) {
    const res = [];

    while (left <= right) {
        const y = Math.floor(left / n), x = left % n;
        res.push(Math.max(y, x) + 1);
        left += 1;
    }

    return res;
}
```