---
문제번호: 1874
문제이름: '스택 수열'
주소: 'https://www.acmicpc.net/problem/1874'
분류: ['자료 구조', '스택']
---

# 풀이

스택에 `push`하는 순서는 오름차순이라는 것이 중요 아이디어 였다. 입력된 수열을 담는 `target`배열이 `[4, 3, 6, 8, 7, 5, 2, 1]`와 같을 때 이 배열의 첫 원소인 `4`를 완성시키려면 스택에 1부터 4까지 존재해야한다. 만약 스택의 `top`이 `target`배열의 현재 인덱스의 원소와 같으면 스택에서 제거하고 다를 경우 함수를 종료하도록 했다.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (len, target) => {
    const stack = [];
    let ret = '';
    for (let i = 0, cur = 1; i < len; i += 1) {
        const t = +target[i];
        while (cur <= t) {
            stack.push(cur);
            ret += '+\n';
            cur += 1;
        }
        const top = stack.pop();
        if (t === top) ret += '-\n';
        else return 'NO';
    }
    return ret;
};

console.log(solution(+input[0], input.slice(1)));
```

`cur`는 스택에 가장 마지막으로 들어간 값을 나타내는 변수인데 같은 정수가 두 번 나오지 않고 스택에는 오름차순으로만 들어갈 수 있으므로 수열을 나타내는 배열인 `target`배열의 현재 원소인 `t`보다 작을때만 스택에 `push`한다. 이 과정을 끝내고 스택의 `top`의 값과 `t`값이 같으면 스택에서 제거하고 그렇지 않으면 수열을 만들 수 없기에 종료한다.
