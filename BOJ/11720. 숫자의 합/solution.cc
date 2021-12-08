#include <iostream>

using namespace std;

int main() {
    int t, sum = 0;
    cin >> t;
    while (t--) {
        char x;
        cin >> x;
        sum += (x - 48);
    }
    cout << sum;
}