#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc, apt[15];
    cin >> tc;
    while (tc--) {
        int n, k;
        cin >> n >> k;

        for (int i = 0; i < k; i += 1) apt[i] = i + 1;
        for (int y = 0; y < n; y += 1) {
            for (int x = 1; x <= k; x += 1) {
                apt[x] += apt[x - 1];
            }
        }
        cout << apt[k - 1] << '\n';
    }

    return 0;
}