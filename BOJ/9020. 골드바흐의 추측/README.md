---
문제번호: 9020
문제이름: '골드바흐의 추측'
주소: 'https://www.acmicpc.net/problem/9020'
분류: ['수학', '정수론', '소수 판정', '에라토스테네스의 체']
---

# 풀이

## 첫 번째 풀이

약 2000ms가 나왔는데 시간을 많이 소모된 이유를 꼽자면

- `sieve`에서 reduce해서 반환한 것.
- `solution`에서 숫자의 차를 구하려고 for문을 돈 것

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sieve = max => {
    const p = Array(max + 1).fill(1);
    p[0] = p[1] = 0;
    for (let i = 2; i * i < max + 1; i += 1) {
        for (let j = i + i; j < max + 1; j += i) {
            p[j] = 0;
        }
    }
    
    const ret = p.reduce((primes, num, i) => primes = num ? [...primes, i] : primes, []);
    return ret;
};
const primes = sieve(10000);

const solution = n => {
    const half = n / 2;
    let diff = 987654321, a, b;

    for (let i = 0; primes[i] <= half; i += 1) {
        const sub = n - primes[i];
        if (primes.includes(sub)) {
            const gap = Math.abs(sub - primes[i]);
            if (gap < diff) {
                diff = gap;
                a = primes[i], b = sub;
            }
        }
    }

    return [a, b];
};

let res = '';
for (let i = 1; i < input.length; i += 1) {
    const [a, b] = solution(+input[i]);
    res += `${a} ${b}\n`;
}
console.log(res);
```

## 두 번째 풀이

200ms로 10배나 줄었다. `solution`에서 `i`와 `j`의 합은 `n`이 되기 때문에 가장 먼저 `primes[i]`와 `primes[j]`가 둘 다 참으로 나타나는 부분을 찾으면 된다.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sieve = max => {
    const p = Array(max + 1).fill(1);
    p[0] = p[1] = 0;
    for (let i = 2; i * i < max + 1; i += 1) {
        for (let j = i + i; j < max + 1; j += i) {
            p[j] = 0;
        }
    }
    return p;    
};
const primes = sieve(10000);

const solution = n => {
    let i = j = n / 2;
    while (true) {
        if (primes[i] && primes[j]) return [i, j];
        i -= 1;
        j += 1;
    }
};

let res = '';
for (let i = 1; i <= +input[0]; i += 1) {
    const [a, b] = solution(+input[i]);
    res += `${a} ${b}\n`;
}
console.log(res);
```