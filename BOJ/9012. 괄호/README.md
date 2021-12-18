---
문제번호: 9012
문제이름: '괄호'
주소: 'https://www.acmicpc.net/problem/9012'
분류: []
---

# 풀이

## 첫 번째 풀이

스택

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = '';

const isValidParenthesis = ps => {
    const stack = [];
    for (let i = 0; i < ps.length; i += 1) {
        if (ps[i] === '(') stack.push(1);
        else {
            if (!stack.length) return false;
            stack.pop();
        }
    }
    return !stack.length;
};
input.slice(1).forEach(ps => res += (isValidParenthesis(ps) ? 'YES' : 'NO') + '\n');
console.log(res);
```

## 두 번째 풀이

카운터

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int t;
    cin >> t;

    while (t--) {
        string ps;
        cin >> ps;

        int cnt = 0;
        for (int i = 0; i < ps.size(); i += 1) {
            cnt += ps[i] == '(' ? 1 : -1;
            if (cnt < 0) break;
        }
        cout << (cnt ? "NO" : "YES") << '\n';
    }

    return 0;
}
```