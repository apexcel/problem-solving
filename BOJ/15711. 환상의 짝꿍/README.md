---
문제번호: 15711
문제이름: '환상의 짝꿍'
주소: 'https://www.acmicpc.net/problem/15711'
분류: ['수학', '정수론', '소수 판정', '에라토스테네스의 체']
---

# 풀이

임의의 수 $S$를 두 소수 $A$와 $B$의 합으로 나타낼 수 있는가 하는 문제. 처음에는 A와 B값을 1씩 더하고 빼주면서 두 수가 모두 소수인지 판별했으나 시간 초과가 되었다. 이를 풀기 위해서는 아래를 알아야한다.

1. 골드바흐 추측
    - 2보다 큰 모든 짝수는 두 개의 소수의 합으로 나타낼 수 있다. (하나의 소수를 두 번 사용하는 것도 가능)
    - $S$가 홀수인 경우 소수 중 짝수인 수는 2밖에 없으므로 $S = 2 + (S - 2)$로 나타낼 수 있다.
    - 따라서 $S - 2$가 소수인지 확인하면 된다.
2. 소수 판별
    - 어떤 수 x의 소수를 판별하려면 x의 제곱근까지만 탐색하면 된다.
    - A와 B가 $2 * 10e12$이므로 둘 의 합은 최대 $4 * 10e12$이며 이의 제곱근은 $2 * 10e6$가 된다. 따라서 $2,000,000$까지의 소수를 구해두면 된다.

```js
const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

// 에라토스테네스의 체
const primes = Array(2000001).fill(1);

primes[0] = primes[1] = 0;
for (let i = 2; i < primes.length; i += 1) {
    if (!primes[i]) continue;
    for (let j = i * i; j < primes.length; j += i) {
        primes[j] = 0;
    }
}

// 소수만 따로 추출한 배열
const extracted = [];
for (let i = 2; i < primes.length; i += 1) {
    if (primes[i]) extracted.push(i);
}

const isPrime = x => {
    // 소수만 있는 배열을 순회하면서 x의 제곱근 이하의 소수들 중에서 나누어 떨어지는 지 확인
    // 소수의 배수로 나누어 떨어지면 어쨌든 소수로 나누어 떨어지기 때문
    for (let i = 0; i < extracted.length && extracted[i] ** 2 <= x; i += 1) {
        if (x % extracted[i] === 0) return false;
    }
    return true;
}

let res = '';
for (let pair of data) {
    const [a, b] = pair.split(' ').map(Number);
    let sum = a + b, p = false;
    // 합이 4보다 작으면 즉, 2 또는 3이면 불가능
    if (sum < 4) p = false;
    // 2보다 큰 짝수이므로 골드바흐 추측에 의해 가능
    else if (sum % 2 === 0) p = true
    // 홀수인 경우
    else p = isPrime(sum - 2);

    res += (p ? 'YES' : 'NO') + '\n';
}
console.log(res);
```

