#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int e, s, m, cnt = 1;
    cin >> e >> s >> m;

    while (1) {
        if ((cnt - e) % 15 == 0 && (cnt - s) % 28 == 0 && (cnt - m) % 19 == 0) {
            cout << cnt;
            break;
        }
        cnt += 1;
    }
    return 0;
}