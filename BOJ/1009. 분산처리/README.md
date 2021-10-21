---
문제번호: 1009
문제이름: '분산처리'
주소: 'https://www.acmicpc.net/problem/1009'
분류: ['수학', '구현']
---

# 풀이

```js
let res = '';
for (let i = 0; i < parseInt(input[0], 10); i += 1) {
    let [a, b] = input[i + 1].split(' ').map(v => parseInt(v, 10));
    let pow = 1;
    while (b--) {
        pow = (pow * a) % 10;
    }
    res += pow === 0 ? '10\n' : pow + '\n';
}
console.log(res);
```

문제에서 설명하는대로 구현하면 된다. 근데 제곱수를 살펴보면 규칙이 나온다.

## 규칙

|$a$|$b$|$a^b$|$a^b \mod 10$|
|:---:|:---:|:---:|:---:|
|2|0|1|1|
|2|1|2|2|
|2|2|4|4|
|2|3|8|8|
|2|4|16|6|
|2|5|32|2|
|2|6|64|4|
|2|7|128|8|

$a^b \mod 10$의 값을 구하다보면 일의 자리수가 반복되는 것을 알 수 있는데, `0, 1, 5, 6`은 항상 일정하고, `4, 9`는 주기가 2이며, `2, 3, 7, 8`은 주기가 4로 반복된다. 이는 자연수 $N$에 $P$를 $N$의 일의 자리 수라고 하면 $N = 10Q + P, P = \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$로 나타낼 수 있다. $N^x$와 $P^x$의 일의 자리수는 같다고 한다. 그렇다면 `b`는 `b % 4 + 4`로 나타낼 수 있다.

```js
let res = '';
for (let i = 0; i < parseInt(input[0], 10); i += 1) {
    let [a, b] = input[i + 1].split(' ').map(v => parseInt(v, 10));
    b = b % 4 + 4;
    let pow = 1;
    while (b--) {
        pow = (pow * a) % 10;
    }
    res += pow === 0 ? '10\n' : pow + '\n';
}
console.log(res);
```