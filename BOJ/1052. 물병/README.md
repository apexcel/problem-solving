---
문제번호: 1052
문제이름: '물병'
주소: 'https://www.acmicpc.net/problem/1052'
분류: ['구현', '그리디 알고리즘', '시뮬레이션', '비트마스킹']
---

# 풀이

`n` 값을 이진수로 변환했을 때 `1`의 개수가 물병의 개수이다. 예컨대 $13$은 이진법으로 $1101
$`인데 $8l$ 1개, $4l$ 1개, $1l$ 1개가 있다는 뜻이다.

## 첫 번째 풀이

```js
const [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
let res = n;
while (1) {
    let quot = res, cnt = 0;
    while (quot > 0) {
        if (quot % 2) cnt += 1;
        quot = Math.floor(quot / 2);
    }
    if (cnt <= k) break;
    res += 1;
}

console.log(res - n);
```

1300ms

## 두 번째 풀이

```js
let [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
let bin = n.toString(2), res = 0;
for (let i = bin.length - 1; i >= 0 && bin.match(/1/g) && bin.match(/1/g).length > k; i -= 1) {
    if (bin[i] === '1') {
        n += 2 ** (bin.length - 1 - i);
        res += 2 ** (bin.length - 1 - i);
    }
    bin = n.toString(2);
}
console.log(res);
```

128ms

1. n을 이진수로 변환하여 1의 개수를 파악한다.
2. LSB부터 순회하며 1의 개수가 k보다 클 때까지 반복한다.
3. 현재 요소가 `1`인 경우 `n`과 `res`에 $2^p$만큼 더해준다.
4. 여기서 $p$는 이진수의 자리수로 `n=13`, `k=1`일 때, $13=1101_2$이므로 첫 번째 `1`이 나타난 자리가 0이므로 $2^0 = 1$만큼 더하고 그 다음 $1110_2$가 되었으므로 `1`이 나타난 자릿수는 $2^1=2$이므로 모두 더해 총합은 `3`이 되므로 `res`는 `3`이 되고 `n`은 `3`를 더해 $16=10000_2$가 된다.
5. `n`은 남아있는 `1`의 수를 줄이기 위해서 더해주고, 필요한 물통의 개수는 `res`이다.

## C++ 풀이

다른 사람 풀이를 참고.

```c++
#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n, k, res = 0;
    cin >> n >> k;

    while (1) {
        int cnt = 0;
        for (int i = n; i != 0; i -= (i & -i)) cnt += 1;
        if (cnt <= k) break;
        res += n & -n;
        n += n & -n;
    }

    cout << res;
}
```

- 반복문을 순회하며 `1`의 개수가 몇 개인지 파악한다. (`cnt`)
- `cnt`가 `k`보다 작거나 같다면, 즉 물병을 옮길 수 있는 상태가 되면 종료
- `n & -n`은 비트가 `1`인 것들 중 가장 우측의 `1`인 비트를 가져오는 연산
