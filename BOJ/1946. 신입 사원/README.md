---
문제번호: 1946
문제이름: '신입 사원'
주소: 'https://www.acmicpc.net/problem/1946'
분류: ['그리디 알고리즘', '정렬']
---

# 풀이

값으로 들어오는 쌍이 `[a, b]`일때 `a`를 배열의 인덱스로 잡고 `b`를 원소로 두면 중복되는 값이 없기 때문에 오름차순으로 정렬한 것과 같이 된다. 기준값 `base`를 배열의 첫 번째 원소를 서류 전형 1등으로 두고 `i > 1`인 `i`번째 원소의 값이 `base`보다 크다면 탈락이다. 뒤의 인덱스에 위치한다는 것은 서류 전형의 등수가 밀린다는 뜻이며 `b`값 마저도 크다면 두 전형의 등수가 밀린다는 뜻이므로 탈락인 것. 그렇지 않고 작다면 `base` 값을 통과한 사람의 `b`원소 값으로 변경해준다.

```js
const [n, ...cases] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let res = '';

for (let k = 0, offset = 0; k < +n; k += 1) {
    const end = +cases[offset];
    const candidates = Array(end + 1).fill(0);

    for (let i = 0; i < end; i += 1) {
        const [a, b] = cases[i + offset + 1].split(' ').map(Number);
        candidates[a] = b;
    }
    offset += end + 1;

    let cnt = 1;
    for (let i = 2, base = candidates[1]; i < candidates.length; i += 1) {
        if (base > candidates[i]) {
            base = candidates[i];
            cnt += 1;
        }
    }

    res += cnt + '\n';
}

console.log(res);
```
