#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    while (1) {
        int x, y;
        cin >> x >> y;
        if (!x && !y) return 0;
        cout << x + y << '\n';
    }
    return 0;
}