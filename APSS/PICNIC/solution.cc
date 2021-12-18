#include <iostream>
#include <cstring>

using namespace std;

int areFriends[10][10], hasFriends[10];

int solution(int amount) {
    int idx = -1, cnt = 0;
    for (int i = 0; i < amount; i += 1) {
        if (!hasFriends[i]) {
            idx = i;
            break;
        }
    }
    if (idx < 0) return 1;

    for (int i = idx; i < amount; i += 1) {
        if (!hasFriends[i] && !hasFriends[idx] && areFriends[i][idx]) {
            hasFriends[i] = hasFriends[idx] = 1;
            cnt += solution(amount);
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