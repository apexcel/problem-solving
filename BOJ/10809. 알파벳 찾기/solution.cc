#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    char a[101];
    cin >> a;

    int b[26];
    fill_n(b, 26, -1);

    for (int i = 0; a[i]; i += 1) {
        int idx = a[i] - 97;
        b[idx] = b[idx] < 0 ? b[idx] = i : b[idx];
    }

    for (int x: b) cout << x << ' ';
}