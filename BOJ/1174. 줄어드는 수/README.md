---
문제번호: 1174
문제이름: '줄어드는 수'
주소: 'https://www.acmicpc.net/problem/1174'
분류: []
---

# 풀이

## 첫 번째 풀이

완전탐색, TLE

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const res = [];

for (let i = 0; i <= 987654321; i += 1) {
    let quot = i, rem, prev = -1, flag = 1;
    while (quot > 0) {
        rem = quot % 10;
        if (prev > -1 && prev >= rem) {
            flag = 0;
            break;
        }
        prev = rem;
        quot = Math.floor(quot / 10);
    }
    if (flag) res.push(i);
}

console.log(n - 1 >= res.length ? -1 : res[n - 1]);
```

## 두 번째 풀이

`0`부터 `9`까지 큐에 담고 큐에서 꺼낸 수 $n$에 대해 $n \mod 10$은 n보다 클 수 없다. 이후에 큐에 들어가는 수들의 $mod$ 값은 일의 자리수만 나오므로 이 값보다 작을 때까지 반복한다.

```js
const n = +require('fs').readFileSync('/dev/stdin').toString();
const res = [], q = [];

for (let i = 0; i <= 9; i += 1) {
    res[i] = i;
    q[i] = i;
}

while (q.length) {
    const front = q.shift();

    for (let i = 0; i < front % 10; i += 1) {
        const n = (front * 10) + i;
        q.push(n);
        res.push(n);
    }
}
console.log(n - 1 >= res.length ? -1 : res[n - 1]);
```

## 기타 풀이

조합으로 모든 경우의 수를 조합한 뒤 정렬하는 방법. 전체 조합의 경우의 수가 크지 않기 때문에 가능.
가능한 경우는 $_{10}C_1 + _{10}C_2 + ... + _{10}C_{10}$로 1024개이다.