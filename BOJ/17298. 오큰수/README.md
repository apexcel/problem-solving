---
문제번호: 17298
문제이름: '오큰수'
주소: 'https://www.acmicpc.net/problem/17298'
분류: ['자료 구조', '스택']
---

# 풀이

## 첫 번째 풀이

생각나는 대로 풀이. `arr`배열의 맨 뒤에서부터 시작하여 현재 원소 `cur`보다 이전 원소인 `prev`가 더 크면 이를 스택에 저장하고 그렇지 않은 경우 스택에서 현재 원소보다 큰 값을 찾는다. 만약 현재 원소보다 큰 값이 아니라면 스택에서 제거하고 스택이 비어있는 경우에는 `res`배열에 `-1`을 삽입한다.

```js
const [len, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solution = (n, arr) => {
    const stack = [];
    let res = [];

    for (let i = n; i > 0; i -= 1) {
        const cur = +arr[i - 1], prev = +arr[i];
        if (cur < prev) {
            stack.push(prev);
            res.push(prev);
        }
        else {
            while (stack.length) {
                let top = stack[stack.length - 1];
                if (top > cur) {
                    res.push(top);
                    break;
                }
                else stack.pop();
            }
            if (!stack.length) res.push(-1);
        }
    }
    return res.reverse().join(' ');
}

console.log(solution(+len, nums.split(' ')));
```

## 두 번째 풀이

다른 사람 풀이. 스택에 값대신 인덱스를 넣어 처리하는 방식이다.
스택이 비어있지 않은 경우 `arr`배열의 현재 원소 값이 스택의 `top`에 있는 인덱스의 원소 값보다 크다면 `top` 값을 `pop`연산하여 꺼낸다. 이 값은 오큰수가 정해지지 않은 인덱스 값으로 해당 인덱스의 값을 `arr`의 현재 원소로 바꾼다. 이후 스택에 남아 있는 인덱스들은 오큰수가 없으므로 `-1`로 처리한다.

```js
function solution(n, arr) {
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
            arr[stack.pop()] = arr[i];
        }

        stack.push(i);
    }
    while (stack.length !== 0) {
        arr[stack.pop()] = -1;
    }
    console.log(arr.join(' ').trim());
}
```