#include <iostream>

using namespace std;

int main() {
    int n, m = -1, len;
    float res, sum = 0;
    cin >> n;
    len = n;

    while (len--) {
        float val;
        cin >> val;
        sum += val;
        if (val > m) {
            m = val;
        }
    }

    res = sum * 100 / n / m;
    cout << res;

    return 0;
}