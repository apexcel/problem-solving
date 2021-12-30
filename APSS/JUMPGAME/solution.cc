#include <iostream>
#include <cstring>

using namespace std;

int n, board[100][100], dp[100][100];

int jump(int x, int y) {
    if (y >= n || x >= n) return 0;
    if (y == n - 1 && x == n - 1) return 1;
    if (dp[y][x] != -1) return dp[y][x];
    int move = board[y][x];
    return dp[y][x] = (jump(x + move, y)) || (jump(x, y + move));
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        cin >> n;

        for (int y = 0; y < n; y += 1) {
            for (int x = 0; x < n; x += 1) {
                cin >> board[y][x];
            }
        }

        memset(dp, -1, sizeof(dp));
        cout << (jump(0, 0) ? "YES" : "NO") << '\n';
    }

    return 0;
}