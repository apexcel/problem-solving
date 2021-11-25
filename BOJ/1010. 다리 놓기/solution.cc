#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int tc;
    cin >> tc;

    while (tc--) {
        int n, r;
        long res = 1;
        cin >> r >> n;

        for (int i = 1; i <= r; i += 1) {
            res = res * (n - i + 1) / i;
        }
        cout << res << '\n';
    }
    return 0;
}