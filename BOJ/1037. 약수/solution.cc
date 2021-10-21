#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n, m, b = -1, s = 987654321;
    cin >> n;
    while (n--) {
        cin >> m;
        if (m > b) b = m;
        if (m < s) s = m;
    }
    cout << b * s;
    return 0;
}