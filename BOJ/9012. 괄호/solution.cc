#include <iostream>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int t;
    cin >> t;

    while (t--) {
        string ps;
        cin >> ps;

        int cnt = 0;
        for (int i = 0; i < ps.size(); i += 1) {
            cnt += ps[i] == '(' ? 1 : -1;
            if (cnt < 0) break;
        }
        cout << (cnt ? "NO" : "YES") << '\n';
    }

    return 0;
}