#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, cnt = 0;
    cin >> n;

    while (n % 5) {
        n -= 3;
        cnt += 1;
    }
    cout << (n < 0 ? -1 : cnt + (n / 5));
    return 0;
}