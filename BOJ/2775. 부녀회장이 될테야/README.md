---
문제번호: 2775
문제이름: '부녀회장이 될테야'
주소: 'https://www.acmicpc.net/problem/2775'
분류: ['수학']
---

# 풀이

## 첫 번째 풀이

이차원 배열을 만들어서 값들을 모두 구한후에 값을 가져오는 방식.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tc = input.slice(1);
const apt = Array.from(Array(15), () => Array(15).fill(0).map((_, i) => i + 1));

for (let y = 1; y < 15; y += 1) {
    for (let x = 1; x < 15; x += 1) {
        apt[y][x] = apt[y - 1][x] + apt[y][x - 1];
    }
}

let res = '';
for (let i = 0; i < tc.length; i += 2) {
    const n = tc[i], k = tc[i + 1];
    res += apt[n][k - 1] + '\n';
}

console.log(res);
```

## 두 번째 풀이

일차원 배열 1개만 사용해서 값을 매번 구할수도 있다.

```cpp
#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc, apt[15];
    cin >> tc;
    while (tc--) {
        int n, k;
        cin >> n >> k;

        for (int i = 0; i < k; i += 1) apt[i] = i + 1;
        for (int y = 0; y < n; y += 1) {
            for (int x = 1; x <= k; x += 1) {
                apt[x] += apt[x - 1];
            }
        }
        cout << apt[k - 1] << '\n';
    }

    return 0;
}
```