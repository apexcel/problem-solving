#include <iostream>

using namespace std;

int dp[101];

int tiling(int n) {
    if (n <= 1) return 1;
    if (dp[n]) return dp[n];
    return dp[n] = (tiling(n - 2) + tiling(n - 1)) % 1000000007;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        int n;
        cin >> n;
        cout << tiling(n) << '\n';
    }

    return 0;
}