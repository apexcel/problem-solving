#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n, sum = 0;
    cin >> n;

    for (int i = 1; i <= n; i += 1) {
        sum += i;
    }

    cout << sum;
    
    return 0;
}