#include <iostream>
#include <cstring>

using namespace std;

int n, board[101][101], dp[101][101];

int solution(int x, int y) {
    if (dp[y][x] != -1) return dp[y][x];
    if (y == n - 1) return board[y][x];
    int mx = max(solution(x, y + 1), solution(x + 1, y + 1));
    return dp[y][x] = board[y][x] + mx;
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
            for (int x = 0; x <= y; x += 1) {
                cin >> board[y][x];
            }
        }

        memset(dp, -1, sizeof(dp));
        cout << solution(0, 0) << '\n';
    }

    return 0;
}