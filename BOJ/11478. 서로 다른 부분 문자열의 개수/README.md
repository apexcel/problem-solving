---
문제번호: 11478
문제이름: '서로 다른 부분 문자열의 개수'
주소: 'https://www.acmicpc.net/problem/11478'
분류: ['자료 구조', '문자열', '해시를 사용한 집합과 맵', '트리를 사용한 집합과 맵']
---

## 풀이

처음에는 power set을 구해서 풀어야 할 것 같았는데 아니었음. 문자열의 순서 그대로를 따라야해서 잘라내면서 set에 집어넣으면 된다. 문자열 최대 길이가 1000이라 시간 초과날 것 같았는데 안났음.

```js
const data = require('fs').readFileSync('./data.in').toString().trim();
const SIZE = data.length;
const set = new Set();
let sliceLength = 1;

while (sliceLength <= SIZE) {
    for (let i = 0; i < data.length; i += 1) {
        set.add(data.substring(i, i + sliceLength));
    }
    sliceLength += 1;
}

console.log(set);
```