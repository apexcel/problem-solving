---
문제번호: 1016
문제이름: '제곱 ㄴㄴ 수'
주소: 'https://www.acmicpc.net/problem/1016'
분류: ['수학' '정수론', '소수 판정', '에라토스테네스의 체']
---

# 첫 번째 풀이

```js
function solution(begin, end) {
    const res = new Set();

    for (let n = begin; n <= end; n += 1) {
        let flag = 1;
        for (let i = 2; i < n; i += 1) {
            if (n % (i * i) === 0) {
                flag = 0;
                break;
            }
        }
        if (flag) res.add(n);
    }

    return res.size;
}
```

TIL


## 두 번째 풀이

```js
function solution(begin, end) {
    const sieve = Array(end - begin + 1).fill(1);
    let result = 0;

    for (let i = 2; i * i <= end; i += 1) {
        let x = Math.floor(begin / (i * i));
        if (begin % (i * i)) x += 1;

        for (let y = x * i * i; y <= end; y = (x += 1) * i * i) {
            sieve[y - begin] = 0;
        }
    }

    for (let x of sieve) if (x > 0) result += 1;
    console.log(result);
}
```

에라토네스의 체를 응용하여 풀이하는 문제이다. 생각보다 어려웠다. 무지성 풀이는 무조건 시간초과난다.

먼저 제곱수로 나눌 수 있는 가장 작은 수를 먼저 찾는다. `min` 값이 상당히 큰 경우 해당 수를 찾는데에 오랜 시간을 소모할 수도 있다. 따라서 `min` 값을 제곱수로 나눈 몫으로 `시작하는 수` `x`를 구한다. 나누어 떨어지는 경우에는 `x`를 기점으로, 나누어 떨어지지 않는 경우 `x + 1`로 `시작하는 수`를 구한다.

예시로 `min` 값이 $47$인 경우 가장 작은 제곱수 $4$로 나누는 경우 몫은 $11$이고 나머지는 $3$이다. 나누어 떨어지지 않으므로 몫에 $1$을 더하여 $12$가 되고 $4 × 12 = 48$부터 제곱수로 나누어 떨어진다는 것을 알 수 있다. 따라서 `x`는 $12$가 된다. `x`가 제곱수로 나누어 떨어지면 `x`의 배수들도 나누어 떨어지므로 `x`의 배수들도 제거해준다.
