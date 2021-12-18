---
문제번호: 1038
문제이름: '감소하는 수'
주소: 'https://www.acmicpc.net/problem/1038'
분류: ['브루트포스 알고리즘', '백트래킹']
---

# 풀이

최대 감소하는 수는 `9876543210`으로 단순히 0 부터 순회하면 오래걸린다. 따라서 앞선 자릿수 보다 큰 수만 계산해서 찾아내는 것. 일의 자리 수가 `3`이라면 십의 자리수는 `4` 이상만 가능하면 된다.

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
function solution(n) {
    if (n <= 10) return n;

    const q = [], nums = [];
    let idx = 10;

    for (let i = 0; i < 10; i += 1) {
        q[i] = i;
        nums[i] = i;
    }

    while (q.length) {
        const num = q.shift(); // 큐의 맨 앞에서 숫자를 가져온다
        const last = num % 10; // 해당 숫자의 일의 자리만 가져온다
        for (let i = 0; i < last; i += 1) { // 일의 자리보다 작을 때까지만 진행
            q.push(num * 10 + i); // 자릿수를 늘리고 last보다 작은 수들을 일의 자리에 더한다.
            nums[idx++] = num * 10 + i;
        }
    }
    return n < idx ? nums[n] : -1;
}

console.log(solution(n));
```