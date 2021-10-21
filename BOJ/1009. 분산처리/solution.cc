#include<iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int t;
    cin >> t;

    while (t--) {
        long a, b;
        cin >> a >> b;
        long res = 1;
        b = b % 4 + 4;

        while (b--) {
            res = (res * a) % 10;
        }

        printf("%d\n", res == 0 ? 10 : res);
    }
    return 0;
}