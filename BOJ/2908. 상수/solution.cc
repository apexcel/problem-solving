#include <iostream>

using namespace std;

int reverse(int val) {
    int rem, mul = 100, res = 0;
    while (val > 0) {
        rem = val % 10;
        val /= 10;
        res += rem * mul;
        mul /= 10;
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int a, b;
    cin >> a >> b;
    cout << max(reverse(a), reverse(b));
    return 0;
}