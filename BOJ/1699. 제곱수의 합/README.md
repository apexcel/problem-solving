---
문제번호: 1699
문제이름: '제곱수의 합'
주소: 'https://www.acmicpc.net/problem/1699'
분류: ['수학', '다이나믹 프로그래밍', '정수론']
---

# 풀이

처음에는 `n`에서 `n`의 제곱근보다 작은 수들 중 큰 수부터 탐색하며 큰 수를 빼면서 값을 찾고자 했다.

```js
function recursive(n, arr) {
    if (n <= 0) {
        console.log(arr.length);
        return;
    }
    const m = Math.floor(Math.sqrt(n));
    n -= m ** 2;
    recursive(n, [...arr, m]);
}
```

이 경우 12는 `[9, 1, 1, 1]`로 4개가 나오는데 최소 개수는 `[4, 4, 4]`로 3개가 된다. 12는 다음과 같은 경우의 수로 만들 수 있다. 따라서 무조건 큰 수를 포함한다고 해서 최소 개수를 찾을 수 있는 것은 아니다.

| 경우의 수                   | 사용된 제곱수의 개수 |
|-----------------------------|----------------------|
| [1, 1, ..., 1]              | 12                   |
| [4, 1, 1, 1, 1, 1, 1, 1, 1] | 9                    |
| [4, 4, 1, 1, 1, 1]          | 6                    |
| [9, 1, 1, 1]                | 4                    |
| [4, 4, 4]                   | 3                    |

- 1로 이루어진 제곱수들의 합은 12에서 1을 빼고 11을 만드는 제곱수의 합으로 만들어진 것이라 볼 수 있다.
- `[9, 1, 1, 1]`은 12에서 9를 빼고 3을 제곱수의 합으로 나타낼 수 있는 개수의 합이라고 볼 수 있다.
- 4를 포함하는 경우들은 은 12에서 4를 뺀 값인 8을 제곱수로 나타낸 것으로 볼 수 있다.

`n`을 `n`보다 작은 제곱수들로 빼고, `12 - 1`, `12 - 4`, `12 - 9` 이 값들 중에서 제곱수의 합으로 표현할 때 항의 개수가 가장 작은 값을 찾으면 된다.

예를들어 `12 - 4`의 경우를 살펴보자. 12는 8을 만드는 항의 최소 개수로 만드는 방법에 4를 만드는 항의 최소 개수를 더한 것이고, 8은 8을 만드는 항의 최소 개수에 다시 4를 만드는 항의 최소 개수를 더한 것과 같다. 4를 만들수 있는 제곱수는 1과 2인데 이 중 항의 개수가 최소가 되는 것은 2이고 4를 만드는 항의 최소 개수는 1이므로 12를 만드는 항의 최소 개수는 3이다.

```js
const dp = Array(n + 1).fill(0);

for (let i = 1; i <= n; i += 1) {
    dp[i] = i;
    for (let j = 1; j ** 2 <= i; j += 1) {
        dp[i] = Math.min(dp[i], dp[i - (j ** 2)] + 1);
    }
}
```

- 0을 제곱수로 나타낼 수 있는 경우는 없으므로 0으로 초기화하고 나머지는 전부 1로 이루어진 경우, 즉 최대인 경우로 초기화한다.
- 이후 `n`보다 작은 제곱수들을 순회하면서 항의 개수가 최소인 경우를 찾는다.
