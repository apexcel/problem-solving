---
문제번호: 1339
문제이름: '단어 수학'
주소: 'https://www.acmicpc.net/problem/1339'
분류: ['그리디 알고리즘', '브루트포스 알고리즘']
---

# 풀이

처음에는 문자열 길이가 긴 것으로, 알파벳 등장 횟수가 많은 것 기준으로 정렬 후 문자열에 다시 수를 대입해서 풀려고 했음. 그러나 다항식으로 보고 풀면 쉽게 풀리는 문제. 예를 들어 문자열 `'ABC' + 'BCA'` 는 `'100A + 10B + C + 100B + 10C + A'`로 볼 수 있다.

```js
const [n, ...words] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const table = Array(26).fill(0);

const toIdx = ch => ch.charCodeAt(0) - 65;

words.forEach(word => {
    for (let i = 0; i < word.length; i += 1) {
        table[toIdx(word[i])] += 10 ** (word.length - 1 - i);
    }
});
table.sort((a, b) => b - a);

let num = 9, sum = 0;
for (let t of table) {
    if (t === 0) break;
    sum += t * num;
    num -= 1;
}

console.log(sum);
```