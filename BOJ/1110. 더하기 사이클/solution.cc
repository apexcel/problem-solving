#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, res, cnt = 0;
    cin >> n;
    res = n;
    do {
        res = ((res % 10) * 10) + (((res / 10) + (res % 10)) % 10);
        cnt += 1;
    } while (res != n);
    cout << cnt;
    return 0;
}