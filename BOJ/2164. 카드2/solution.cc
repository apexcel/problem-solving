#include<iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n, b = 1;
    cin >> n;
    if ((n & -n) == n) cout << n;
    else {
        while (b < n) b *= 2;
        cout << 2 * n - b;
    }
    return 0;
}