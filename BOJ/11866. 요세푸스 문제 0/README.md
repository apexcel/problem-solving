---
문제번호: 11866
문제이름: '요세푸스 문제 0'
주소: 'https://www.acmicpc.net/problem/11866'
분류: ['구현', '자료 구조', '큐']
---

# 풀이

## 첫 번째 풀이 (248ms)

```js
const q = Array(n).fill(0).map((_, i) => i + 1);
const res = [];
for (let i = 1; q.length; i += 1) {
    i % k === 0 ? res.push(q.shift()) : q.push(q.shift());
}
console.log(`<${res.join(', ')}>`);
```

## 두 번째 풀이 (136ms)

```js
const q = Array(n).fill(0).map((_, i) => i + 1);
const res = [];
let i = 0;
while (q.length) {
    i = (i + k - 1) % q.length;
    res.push(q.splice(i, 1));
}
console.log(`<${res.join(', ')}>`);
```

연산 횟수의 감소로 인한 성능 향상