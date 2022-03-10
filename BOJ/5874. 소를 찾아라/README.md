---
문제번호: 5874
문제이름: '소를 찾아라'
주소: 'https://www.acmicpc.net/problem/5874'
분류: ['수학', '조합론', '누적 합', '스위핑']
---

# 풀이

## 첫 번째 풀이

진짜 문제 그대로 생각해서 풀이함.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const findLegs = (forest) => {
    const front = [], rear = [];

    for (let i = 1; i < forest.length; i += 1) {
        let prev = forest[i - 1], curr = forest[i];
        if (prev + curr === '((') front.push(i);
        if (prev + curr === '))') rear.push(i);
    }

    return { front, rear }
};

const { front, rear } = findLegs(input);
const res = front.reduce((acc, f) => {
    for (let r of rear) {
        if (f < r) acc += 1;
    }
    return acc;
}, 0);

console.log(res);
```

## 두 번째 풀이

다른 사람 풀이. 이미 앞에서 찾은 앞다리가 있다면 그것 보다 뒤에서 찾은 뒷다리는 자동으로 포함이므로 전체 앞다리 수를 증가시키고 결과에 누적시키는 풀이.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let res = 0, legs = 0;

for (let i = 0; i < input.length; i += 1) {
    const prev = input[i - 1], curr = input[i];
    if (prev + curr === '((') legs += 1;
    if (prev + curr === '))') res += legs;
}

console.log(res);

```