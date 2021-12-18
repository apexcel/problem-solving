#include <iostream>

using namespace std;

long dp[11];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int h, y;
    cin >> h >> y;
    dp[0] = h;

    for (int i = 1; i <= y; i += 1) {
        dp[i] = dp[i - 1] * 1.05;
        if (i >= 3) dp[i] = max(dp[i], (long)(dp[i - 3] * 1.2));
        if (i >= 5) dp[i] = max(dp[i], (long)(dp[i - 5] * 1.35));
    }

    cout << dp[y];
    return 0;
}