#include <iostream>
#include <math.h>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int tc;
    cin >> tc;
    while (tc--) {
        int x1, y1, r1, x2, y2, r2;
        cin >> x1 >> y1 >> r1 >> x2 >> y2 >> r2;

        int d = pow(x1 - x2, 2) + pow(y1 - y2, 2);
        int sub = pow(r1 - r2, 2), sum = pow(r1 + r2, 2);

        if (sub < d && d < sum) cout << 2 << '\n';
        else if (d == 0 && r1 == r2) cout << -1 << '\n';
        else if (sub == d || sum == d) cout << 1 << '\n';
        else cout << 0 << '\n';
    }

    return 0;
}