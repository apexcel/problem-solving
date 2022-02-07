---
문제번호: 2407
문제이름: '조합'
주소: 'https://www.acmicpc.net/problem/2407'
분류: ['수학', '다이나믹 프로그래밍', '조합론', '임의 정밀도 / 큰 수 연산']
---

# 풀이

1. 큰 수 더하기 연산
2. 파스칼 삼각형

만약 BigInt와 같이 큰 수에 대한 자료형을 지원하지 않는다면 직접 큰 수간의 연산을 구현하여야한다. 파스칼 삼각형의 원리는 이항계수를 삼각형의 기하학적 형태로 배열해놓은 것을 말한다. 파스칼 삼각형의 가장 첫 열과 마지막 열은 1이고 1행은 1 하나만 있다. 이후 r행의 c번째 열의 값은 r-1행의 c-1 + c이 된다.

- 파스칼 삼각형의 특징
    1. 각 행의 합은 2의 거듭제곱과 같다
    2. n행의 r열은 nCr과 같다.
    3. 짝수행은 항의 개수가 짝수개이고, 좌우대칭이며 홀수행은 항의 개수가 홀수개이고, 가운데 숫자를 중심으로 좌우대칭이다.
    4. p가 소수인 경우 p번째 행에 놓여있는 수는 양 끝의 1을 제외하고 전부 p의 배수이다.
    5. 홀수만 음영 처리하면 시어핀스키 삼각형이다.
    6. 모서리의 1부터 대각선 방향으로 쭉 더한 값은 다음 줄의 같은 방향 숫자 옆에 있다 (하키스틱 모양처럼 생겨서 하키스틱 패턴이라고 부른다).
    7. 특정한 사선 방향(45도 이하)으로 더하면 피보나치 수가 나온다. (이를 쉽게 보기 위해서는 칸이 참조 링크의 것처럼 칸이 육각형으로 되어있어야 편하다)
    8. 이외에도 여러가지 특징이 있다.

이 문제에서 사용된 원리는 바로 2번째 특징이다.

조합 / 이항계수 설명
> S∣=n인 집합 S가 갖는 r-부분집합의 개수는 이항계수(binomial coefficient)와 같으며, 각 부분집합을 n개에서 r개를 택하는 조합(combination)이라고 한다. 즉 조합이란 n개의 원소를 갖는 집합에서 r개의 원소를 선택하는 것 혹은 선택의 결과로 정의되며, 어떤 순서로 원소를 선택했는지는 중요하지 않기에 순열(permutation)과는 다른 개념이다.

## 첫 번째 풀이

큰 수 더하기 연산을 구현하고 파스칼 삼각형의 원리를 이용하여 풀이

```js
const [n, r] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const adder = (a, b) => {
    const ret = [];
    let len1 = a.length, len2 = b.length, carry = 0;
    let num1, num2;

    while (len1 || len2 || carry) {
        if (len1) {
            len1 -= 1;
            num1 = parseInt(a[len1]);
        }
        if (len2) {
            len2 -= 1;
            num2 = parseInt(b[len2]);
        }
        const sum = num1 + num2 + carry;
        carry = sum > 9 ? 1 : 0;
        ret.push(sum % 10);
        num1 = num2 = 0;
    }

    return ret.reverse().join('');
};

let line = ['1'];
for (let i = 1; i <= n; i += 1) {
    let temp = ['1'];
    for (let j = 1; j < i; j += 1) {
        temp[j] = adder(line[j - 1], line[j]);
    }
    temp.push('1');
    line = temp.slice();
}
console.log(line[r]);
```

## 두 번째 풀이

`BigInt`형을 사용하여 풀이

```js
const [n, r] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let line = [1n];
for (let i = 1; i <= n; i += 1) {
    let temp = [1n];
    for (let j = 1; j < i; j += 1) {
        temp[j] = line[j - 1] + line[j];
    }
    temp.push(1n);
    line = temp.slice();
}
console.log(line[r].toString());
```