#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int mx = -987654321, mn = 987654321;
    int n;
    cin >> n;
    while (n--) {
        int x;
        cin >> x;
        if (mn > x) mn = x;
        if (mx < x) mx = x;
    }
    cout << mn << ' ' << mx;
}