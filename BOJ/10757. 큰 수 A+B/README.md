---
문제번호: 10757
문제이름: '큰 수 A+B'
주소: 'https://www.acmicpc.net/problem/10757'
분류: []
---

# 풀이

자바스크립트같은 경우 `BigInt`형 쓰면된다. 하지만 문제의 의도대로 풀려면 배열과 합의 성질을 이용하여 풀이하면 된다.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int res[10001] = {0, }, carry = 0, idx = 0, len1, len2, num1, num2;
    string s1, s2;
    cin >> s1 >> s2;

    // 두 숫자 문자열의 길이를 변수에 저장한다.
    len1 = s1.size(); 
    len2 = s2.size();

    // 숫자 문자열을 가르키는 인덱스 값이 남아있거나 캐리가 남아 있는 경우
    while (len1 || len2 || carry) {
        if (len1) {
            // 일의 자리부터 덧셈을 시작해야하므로 배열의 맨 뒤에서부터 시작한다.
            num1 = s1[len1 - 1] - '0';
            len1 -= 1;
        }
        if (len2) {
            num2 = s2[len2 - 1] - '0';
            len2 -= 1;
        }
        // 결과 값을 담을 배열에 각 숫자 문자열에서 가져온 값과 이전 결과에서 가져온 캐리 값을 더한 후 mod 연산을 통해 일의 자리만 가져온다.
        res[idx++] = (num1 + num2 + carry) % 10;
        // 이전에 가져온 캐리는 1보다 클 수 없다. 왜냐하면 가장 큰 한 자리수인 9를 더해도 18이므로 캐리는 1을 넘을 수 없다. 따라서 1과 0, 둘 중 하나로 가능하다.
        carry = num1 + num2 + carry > 9 ? 1 : 0;
        // 두 숫자 문자열 중 짧은 것이 먼저 끝나게 되면 값이 바뀌지 않는 경우가 생길 수 있으므로 0으로 초기화해준다.
        num1 = num2 = 0;
    }
    for (int i = idx - 1; i >= 0; i -= 1) cout << res[i];
    return 0;
}
```

- 두 숫자 문자열의 길이를 구해서 두 숫자 문자열을 모두 돌고 캐리가 없을 때까지 반복한다.
- 숫자 문자열의 일의 자리는 가장 마지막 요소이므로 숫자 문자열의 뒤에서 부터 시작한다.
- 숫자 문자열의 인덱스가 0보다 클 때까지 반복한다.
- 결과 값을 담을 배열에 각 숫자 문자열에서 가져온 값과 이전 결과에서 가져온 캐리 값을 더한 후 mod 연산을 통해 일의 자리만 가져뒤 결과 배열에 담는다.
- 캐리가 9보다 크다면 1이고 아니면 0이다. 한 자리 숫자 중 가장 큰 9 끼리 더해도 18이기때문에 1 또는 0으로 나타낼 수 있다.
- 두 숫자 문자열 중 어느 하나가 다른 하나보다 짧을 수 있으므로 숫자가 담길 변수들의 값을 0으로 초기화한다.
- 합이 담긴 배열을 뒤에서부터 순회하여 숫자를 출력한다.