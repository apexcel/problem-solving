#include <iostream>

using namespace std;

long long board[100][100], dp[100][100];
int n;

long long jump(long long x, long long y) {
    if (y == n - 1 && x == n - 1) return 1;
    if (dp[y][x] != 0) return dp[y][x];
    if (dp[y][x] == 0) return dp[y][x];

    int cur = board[y][x];
    if (x + cur < n) dp[y][x] += jump(x + cur, y);
    if (y + cur < n) dp[y][x] += jump(x, y + cur);
    return dp[y][x];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    // cout.tie(nullptr); 메모리 초과난다

    cin >> n;
    for (int y = 0; y < n; y += 1) {
        for (int x = 0; x < n; x += 1) {
            cin >> board[y][x];
        }
    }
    
    jump(0, 0);
    cout << dp[0][0];

    return 0;
}