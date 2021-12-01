#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int radix[10] = {0};
    int a, b, c, mul;
    cin >> a >> b >> c;
    mul = a * b * c;

    while (mul > 0) {
        radix[mul % 10] += 1;
        mul /= 10;
    }

    for (int n: radix) {
        cout << n << '\n';
    }

    return 0;
}