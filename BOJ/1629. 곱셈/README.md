---
문제번호: 1629
문제이름: '곱셈'
주소: 'https://www.acmicpc.net/problem/1629'
분류: ['수학', '분할 정복을 이용한 거듭제곱']
---

# 풀이

## 첫 번째 풀이

모듈로(modulo) 연산의 성질을 이용하여 풀이하는 문제. 일단 모듈로 연산은 나눗셈을 제외하고 분배 법칙이 성립한다. 따라서 다음이 성립한다.

> $A * B \mod C = ((A \mod C) * (B \mod C)) \mod C$

그리고 자세한 풀이는 칸 아카데미에서 "[빠른 모듈로 거듭제곱법](https://ko.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/fast-modular-exponentiation)"을 참고함.

```js
const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const exps = b.toString(2).split('').reverse().reduce((res, bit, i) =>{
    if (bit === '1') res.push([2 ** i, i]);
    return res;
}, []);

const dp = [a % c];
for (let i = 1, pow = 1; pow <= exps[exps.length - 1][0]; i += 1, pow *= 2) {
    dp[i] = (dp[i - 1] ** 2n) % c;
}

let res = 1n;
for (let i = 0; i < exps.length; i += 1) {
    res = (res * dp[exps[i][1]]) % c;
}
console.log(res.toString());
```

1. `Number.MAX_SAFE_INTEGER`를 초과할 수 있으므로 `BigInt`형을 사용한다.
2. 지수의 이진수 값을 기반으로 최대로 찾아야 할 값과 1비트가 몇 번째 인지 파악한다.
3. $2 <= b$인 거듭제곱 $\mod c$ 값을 찾아 배열에 저장한다.
4. 1비트였던 자리의 인덱스를 기반으로 2의 거듭제곱 값을 가져오고 각각 모듈로 연산을 해준다.

## 두 번째 풀이

다른 사람의 풀이를 참고하였다. 문제의 카테고리에 해당하는 분할 정복과 지수 법칙을 적절히 활용한 방법.

```c++
#include <iostream>

using namespace std;

typedef unsigned long long ull;

ull a, b, c;

ull ullPow(ull x, ull y) {
    if (!y) return 1;
    if (y % 2 == 0) {
        ull half = ullPow(x, y / 2);
        return (half * half) % c;
    }
    return (x * ullPow(x, y - 1)) % c;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> a >> b >> c;
    cout << ullPow(a, b);
    
    return 0;
}
```

# 참조(Reference)

- "모듈로 거듭제곱법", *Khan Academy*, https://ko.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/modular-exponentiation
- "빠른 모듈로 거듭제곱법", *Khan Academy*, https://ko.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/fast-modular-exponentiation