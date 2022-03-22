#include <iostream>
#include <string.h>

using namespace std;

int n;
int dp[2000][2000];
int lstk[2000], rstk[2000];

int compare(int l, int r) {
    if (l >= n || r >= n) return 0;
    int &cache = dp[l][r];
    if (cache != -1) return cache;
    
    if (lstk[l] > rstk[r]) {
        cache = max(cache, compare(l, r + 1) + rstk[r]);
    }
    else {
        cache = max(cache, compare(l + 1, r));
        cache = max(cache, compare(l + 1, r + 1));
    }
    return cache;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    cin >> n;

    for (int i = 0; i < n; i += 1) cin >> lstk[i];
    for (int i = 0; i < n; i += 1) cin >> rstk[i];
    memset(dp, -1, sizeof(dp));

    cout << compare(0, 0);
    return 0;
}