---
문제이름: 'PICNIC'
주소: 'https://algospot.com/judge/problem/read/PICNIC'
---

# 풀이

중복해서 세는 경우를 제외하는 것이 포인트. `(2, 3), (0, 1)`같은 경우는 세지않고 `(0, 1), (2, 3)`의 경우만 세는 것.

```cpp
#include <iostream>
#include <cstring>

using namespace std;

// 최대 받을 수 있는 사람은 10
int areFriends[10][10], hasFriends[10];

int solution(int amount) {
    int idx = -1, cnt = 0; // 만약 -1이라면 모두 짝을 찾은 것
    for (int i = 0; i < amount; i += 1) {
        if (!hasFriends[i]) {
            // 짝이 없다면 없는 사람부터 시작
            idx = i;
            break;
        }
    }
    // 모두 짝이 있으면 방법 1가지를 찾은 것이므로 1을 반환
    if (idx < 0) return 1;

    // 짝이 없는 사람부터 시작
    for (int i = idx; i < amount; i += 1) {
        // a와 b모두 짝이 안지어져 있고 a와 b가 친구라면
        if (!hasFriends[i] && !hasFriends[idx] && areFriends[i][idx]) {
            // 짝을 찾았다고 표시
            hasFriends[i] = hasFriends[idx] = 1;
            // 재귀로 기저사례까지 반복
            cnt += solution(amount);
            // 원상 복귀
            hasFriends[i] = hasFriends[idx] = 0;
        }
    }

    return cnt;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n >> m;

        memset(areFriends, 0, sizeof(areFriends));
        memset(hasFriends, 0, sizeof(hasFriends));

        for (int i = 0; i < m; i += 1) {
            int a, b;
            cin >> a >> b;
            areFriends[a][b] = areFriends[b][a] = 1;
        }
        cout << solution(n) << '\n';
    }

    return 0;
}
```