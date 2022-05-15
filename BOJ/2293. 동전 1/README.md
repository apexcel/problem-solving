---
문제번호: 2293
문제이름: '동전 1'
주소: 'https://www.acmicpc.net/problem/2293'
분류: ['다이나믹 프로그래밍']
---

# 풀이

이전에 나온 숫자로 만들 수 있는 방법에 현재 숫자로 만들 수 있는 방법의 가짓수를 더하면 된다.

문제의 예시처럼 주어진 수 가 `1, 2, 5`이고 k가 `10`일 때, 1을 1만 사용해서 만드는 방법은 1가지, 2를 1만 사용해서 만드는 방법은 1가지이다. 여기에 2를 사용해서 1을 만들 수는 없으니 무시하고 2는 2를 통해서 1가지 방법을 만들 수 있다. 따라서 1만 사용해서 만드는 방법의 가짓수 + 2를 사용해서 만들 수 있는 가짓수를 더해준다.

```c++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int dp[10001];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, k, v;
    vector<int> nums;

    cin >> n >> k;
    while (n--) {
        cin >> v;
        nums.push_back(v);
    }
    sort(nums.begin(), nums.end());
    // 자기 자신을 이용해서 만들 수 있는 방법의 갯수는 1개이다. 예컨대
    // 2를 2만 사용해서 만들 수 있는 방법의 갯수는 1이므로 0번은 1로 초기화한다.
    dp[0] = 1;

    for (int num: nums) {
        for (int i = num; i <= k; i += 1) {
            dp[i] += dp[i - num];
        }
    }

    cout << dp[k];
    return 0;
}
```