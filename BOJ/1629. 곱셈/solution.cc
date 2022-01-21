#include <iostream>

using namespace std;

typedef unsigned long long ull;

ull a, b, c;

ull ullPow(ull x, ull y) {
    if (!y) return 1;
    if (y % 2 == 0) {
        ull half = ullPow(x, y / 2);
        return (half * half) % c;
    }
    return (x * ullPow(x, y - 1)) % c;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> a >> b >> c;
    cout << ullPow(a, b);
    
    return 0;
}