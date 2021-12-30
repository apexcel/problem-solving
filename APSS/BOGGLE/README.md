---
문제이름: 'BOGGLE'
주소: 'https://algospot.com/judge/problem/read/BOGGLE'
---

# 풀이

단어를 만들 수 있는 지점까지의 `dp`는 1로 표시하고 그렇지 않은 곳은 0으로 표시한다. 이후 재차 방문했을 때 이미 방문했던 곳이면 무시하면 되는 것이 포인트.

```cpp
#include <iostream>
#include <cstring>
#include <vector>

using namespace std;

int dx[8] = {0, 1, 1, 1, 0, -1, -1, -1};
int dy[8] = {-1, -1, 0, 1, 1, 1, 0, -1};
int dp[5][5][11];
vector<string> board(5);
string word;

int check(int x, int y, int index) {
    int& dpp = dp[y][x][index];
    if (y < 0 || x < 0 || y >= 5 || x >= 5) return 0; // 배열을 벗어난 경우
    if (dpp != -1) return dpp; // 이미 방문했으면 단어를 완성할 수 있는지 없는지 알 수 있기 때문에 바로 반환
    if (board[y][x] != word[index]) return dpp = 0; // 방문한 지점과 알파벳이 다르면 false;
    dpp = 1;
    if (index == word.size() - 1) return 1; // 인덱스와 단어사이즈가 같다는 것과 앞선 if문을 통과하고 여기까지 왔다는 것은 단어가 완성되었다는 것

    for (int i = 0; i < 8; i += 1) {
        int nx = x + dx[i], ny = y + dy[i];
        if (check(nx, ny, index + 1)) return 1;
    }

    return dpp = 0;
}

bool solution(vector<string> board) {
    for (int y = 0; y < 5; y += 1) {
        for (int x = 0; x < 5; x += 1) {
            if (check(x, y, 0)) return true;
        }
    }
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        
        for (int i = 0; i < 5; i += 1) {
            cin >> board[i];
        }

        int cnt;
        cin >> cnt;
        for (int i = 0; i < cnt; i += 1) {
            cin >> word;
            memset(dp, -1, sizeof(dp));
            if (solution(board)) {
                cout << word << " YES\n";
            }
            else {
                cout << word << " NO\n";
            }
        }
    }

    return 0;
}
```
