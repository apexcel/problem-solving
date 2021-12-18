---
문제번호: 19947
문제이름: '투자의 귀재 배주형'
주소: 'https://www.acmicpc.net/problem/19947'
분류: ['다이나믹 프로그래밍', '브루트포스 알고리즘', '재귀']
---

# 풀이

## 첫 번째 풀이

재귀

```js
const [h, y] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let mx = -1;

const calc = (year, prev) => {
    if (year <= 0) {
        mx = Math.max(mx, prev);
        return;
    }

    if (year >= 5) calc(year - 5, Math.floor(prev * 1.35));
    if (year >= 3) calc(year - 3, Math.floor(prev * 1.2));
    calc(year - 1, Math.floor(prev * 1.05));
}

calc(+y, +h);
console.log(mx);
```

## 두 번째 풀이

DP

```c++
#include <iostream>

using namespace std;

long dp[11];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int h, y;
    cin >> h >> y;
    dp[0] = h;

    for (int i = 1; i <= y; i += 1) {
        dp[i] = dp[i - 1] * 1.05;
        if (i >= 3) dp[i] = max(dp[i], (long)(dp[i - 3] * 1.2));
        if (i >= 5) dp[i] = max(dp[i], (long)(dp[i - 5] * 1.35));
    }

    cout << dp[y];
    return 0;
}
```