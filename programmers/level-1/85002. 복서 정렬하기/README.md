---
문제번호: 85002
문제이름: '복서 정렬하기'
주소: 'https://programmers.co.kr/learn/courses/30/lessons/85002'
분류: ['정렬']
---

# 풀이

문제 자체는 요구 사항을 구현하는 것이므로 특별한 건 없다. 근데 `sort()`에서 `compare()` 함수를 만들어 줄 때 `if`, `else` 구문이나 삼항연산으로 조건문을 작성했는데 `||`로 대체 가능하다는 것을 오늘 깨달았다.

```js
arr.sort((a, b) => a.val !== b.val ? a.val - b.val : a.idx - b.idx);
arr.sort((a, b) => a.val - b.val || a.idx - b.idx);
```

사실 생각해보면 `-1`, `0`, `1` 3가지 값만 반환하기 때문에 거짓 같은 값인 `0`을 제외하면 참 같은 값이므로 자연스럽게 다음 조건들은 탐색하지 않는다.