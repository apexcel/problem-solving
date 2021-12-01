#include <iostream>

using namespace std;

int main() {
    int arr[42] = {0};
    int cnt = 0;
    for (int i = 0, n; i < 10; i += 1) {
        cin >> n;
        arr[n % 42] += 1;
    }

    for (int x: arr) {
        if (x > 0) cnt += 1;
    }

    cout << cnt;
}