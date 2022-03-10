---
문제번호: 2659
문제이름: '십자카드 문제'
주소: 'https://www.acmicpc.net/problem/2659'
분류: ['구현', '브루트포스 알고리즘', '정렬']
---

# 풀이

시계수를 구할 때 처음에는 아래와 같은 방법을 썼는데 찾아보니 더 좋은 방법이 있음을 알았다.

```js
let mn = 10000;
for (let i = 0, tmp = 0; i < 4; i += 1, tmp = 0) {
    tmp += input[i % 4] * 1000;
    tmp += input[(i + 1) % 4] * 100;
    tmp += input[(i + 2) % 4] * 10;
    tmp += input[(i + 3) % 4];
    if (mn > tmp) mn = tmp;
}
```

입력으로 주어진 시계수를 찾고 가능한 범위내에서 시계수를 탐색하면서 입력으로 주어진 시계수보다 작으면 카운트를 증가시키는 방법으로 해결.

```js
const input = +require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').join('');

const clockNumber = n => {
    let ret = n;
    for (let i = 0; i < 3; i += 1) {
        n = (n % 1000) * 10 + Math.floor(n / 1000);
        if (ret > n) ret = n;
    }
    return ret;
};

let cnt = 0;
for (let i = 1111; i <= clockNumber(input); i += 1) {
    if (clockNumber(i) === i) cnt += 1;
}

console.log(cnt);
```