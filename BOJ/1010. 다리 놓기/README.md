---
문제번호: 1010
문제이름: '다리 놓기'
주소: 'https://www.acmicpc.net/problem/1010'
분류: ['수학', '다이나믹 프로그래밍', '조합론']
---

# 풀이

## 첫 번째 풀이

```js
function fac(n, r) {
    if (n === r) return 1;
    else if (r === 1) return n;
    return fac(n - 1, r - 1) + fac(n - 1, r);
}

for (let i = 1; i < input.length; i += 1) {
    const [r, n] = input[i].split(' ');
    str += fac(+n, +r) + '\n';
}
```

시간 초과로 터진다.

## 두 번째 풀이

```js
for (let i = 1; i < input.length; i += 1) {
    const [r, n] = input[i].split(' ');
    let res = 1;

    for (let j = 1; j <= r; j += 1) {
        res = res * (n - j + 1) / j;
    }

    str += res + '\n';
}
```

조합의 공식은 $_nC_r = \frac {n!}{(n-r)!r!}$이다. 분자의 $n!$을 분모의$(n-r)!$으로 나누었다고 가정하고 $n!$과 $r!$을 반복문을 통해 수행하는 방법이다.