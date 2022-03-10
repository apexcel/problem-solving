---
문제번호: 1039
문제이름: '교환'
주소: 'https://www.acmicpc.net/problem/1039'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색']
---

# 풀이

문제를 풀면서 가장 많이 만난 것은 '시간 초과'와 '메모리 초과'였다. 시간 압축하려고 하다보면 메모리가 터지고 메모리 줄일려고 하면 시간이 초과났다. 이 문제에서 가장 중요한 것은 같은 연산횟수(K)에서 중복되는 숫자들을 큐에 집어 넣지 않는 것. `132`의 경우 처음 연산(K + 1)에서 `312`, `231`, `123`이 나오는데 각 숫자들은 다음 연산(K + 2)에서

- `312` => `132`, `213`, `321`
- `231` => `321`, `132`, `213`
- `123` => `213`, `321`, `132`

와 같이 숫자들을 생성한다. 이 때 중복되는 숫자들을 넣지 않아야 터지지 않을 수 있다. `Set`을 이용해서 중복되는 숫자들을 파악했다.

```js
const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// 문자열을 배열로 변환시키지 않고 문자열을 바로 조작하기 위해서 작성한 문자열 함수
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const solution = (n, k) => {
    const len = n.length
        , done = +k
        , set = new Set()
        , q = [[0, n]];

    let mx = -1, next = -1;

    while (q.length) {
        const [cnt, str] = q.shift();

        // 카운터가 바뀔 때, 즉 다음 연산으로 넘어갈 때 Set 초기화
        if (cnt > next) {
            next = cnt;
            set.clear();
        }
        // 연산 횟수가 K이면서 가장 큰 값을 찾음
        if (cnt === done && mx < +str) mx = +str;
        // K보다 크면 종료
        if (cnt > done) break;

        // i > j이면서 가능한 모든 경우에 대해서 조합
        for (let i = 0; i < len; i += 1) {
            for (let j = i + 1; j < len; j += 1) {
                let copy = str, tmp = copy[i];
                copy = copy.replaceAt(i, copy[j]);
                copy = copy.replaceAt(j, tmp);
                // 맨 앞이 '0'이 아니면서 이미 조합된 숫자가 Set에 없는 경우
                if (copy[0] !== '0' && !set.has(copy)) {
                    q.push([cnt + 1, copy]);
                    // Set에 추가해서 같은 숫자가 나올 경우 무시하도록 한다
                    set.add(copy);
                }
            }
        }
    }
    return mx;
}

console.log(solution(n, k));
```