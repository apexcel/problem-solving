---
문제번호: 9935
문제이름: '문자열 폭발'
주소: 'https://www.acmicpc.net/problem/9935'
분류: ['자료 구조', '문자열', '스택']
---

## 첫 번째 풀이

메모리 초과

```js
let [target, source] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let exist = target.match(source);
while (exist !== null) {
    target = target.replaceAll(source, '');
    exist = target.match(source);    
}
console.log(!target ? 'FRULA' : target);
```

## 두 번째 풀이

메모리 초과

```js
const [target, source] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const filter = target => {
    const stk = [];
    let ret;
    for (let i = 0; i < target.length; i += 1) {
        const substr = target.substring(i, i + source.length);
        substr !== source ? stk.push(target[i]) : i += source.length - 1;
    }
    ret = stk.join('');

    if (target.length !== ret.length) ret = filter(ret);
    return ret;
}

const res = filter(target);
console.log(res ? res : 'FRULA');
```

## 세 번째 풀이

```js
const [target, source] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

const stk = [];
for (let i = 0; i < target.length; i += 1) {
    // 알파벳 1개씩 스택에 삽입
    stk.push(target[i]);

    // 최소 폭발 문자열의 길이만큼 스택에 존재해야함
    if (stk.length >= source.length) {
        let isSame = true;

        for (let j = 0; j < source.length; j += 1) {
            // 스택에 삽입된 문자열 스택의 top에서부터 폭발 문자열의 길이만큼 검사
            // 만약 하나라도 다르면 바로 중지
            if (stk[stk.length - source.length + j] !== source[j]) {
                isSame = false;
                break;
            }
        }

        // 폭발 문자열 이라면 스택에서 빼낸다
        if (isSame) {
            for (let j = 0; j < source.length; j += 1) {
                stk.pop();
            }
        }
    }
}

console.log(stk.length ? stk.join('') : 'FRULA');
```