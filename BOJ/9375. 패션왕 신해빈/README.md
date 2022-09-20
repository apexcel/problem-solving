---
문제번호: 9375
문제이름: '패션왕 신해빈'
주소: 'https://www.acmicpc.net/problem/9375'
분류: ['수학', '자료 구조', '조합론', '해시를 사용한 집합과 맵']
---

# 풀이

처음에는 순수하게 조합해서 풀었는데 시간 초과났다.
이 문제를 푸는 핵심은 선택하지 않는 것도 하나의 선택이라는 것이다.
예를 들어 다음과 같이 옷이 있다고 하자.

- 머리: $\{ A, B \}$
- 상의: $\{ C \}$
- 하의: $\{ D, E \}$

이 때 각각의 의상을 선택하지 않는 경우를 추가해주면 다음과 같다.

- 머리: $\{ A, B, \emptyset \}$
- 상의: $\{ C, \emptyset \}$
- 하의: $\{ D, E, \emptyset \}$

각각의 경우를 모두 곱해주고 아무것도 입지 않는 경우 즉, 각 집합에서 공집합만 선택한 경우를 빼주면 된다. 따라서 각 집합마다 `원집합의 개수 + 1`을 모두 더한 뒤 `1`을 빼주면 된다. 따라서 위의 예제의 답은 $(3 * 2 * 3) - 1 = 17$이다.

```js
const [_, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const res = [];
for (let i = 0; i < data.length; i += 1) {
    const cnt = +data[i];
    const dict = {};
    for (let j = 1; j <= cnt; j += 1) {
        const [_, part] = data[i + j].split(' ');
        if (!dict[part]) dict[part] = 0;
        dict[part] += 1;
    }
    const sum = Object.values(dict).reduce((acc, cur) => acc * (cur + 1), 1);
    res.push(sum - 1);
    i += cnt;
}
console.log(res.join('\n'));
```
