---
문제번호: 12946
문제이름: '하노이의 탑'
주소: 'https://programmers.co.kr/learn/courses/30/lessons/12946'
분류: ['구현', '수학', '재귀']
---

# 풀이

잘 알려진 하노이의 탑 문제. 큰 문제를 작은 문제로 분할해가는 재귀 형태이다.

```js
function solution(n) {
    const trace = [];

    const hanoi = (n, from, by, to) => {
        if (n === 0) return;
        hanoi(n - 1, from, to, by);
        trace.push([from, to]);
        hanoi(n - 1, by, from, to);
    }

    hanoi(n, 1, 2, 3);
    return trace;
}
```