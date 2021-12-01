#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n, k, res = 0;
    cin >> n >> k;

    while (1) {
        int cnt = 0;
        for (int i = n; i != 0; i -= (i & -i)) cnt += 1;
        if (cnt <= k) break;
        res += n & -n;
        n += n & -n;
    }

    cout << res;
}