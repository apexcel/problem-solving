#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, i = 2;
    cin >> n;

    while (n > 1) {
        if (n % i == 0) {
            n = n / i;
            cout << i << '\n';
        }
        else i += 1;
    }

    return 0;
}