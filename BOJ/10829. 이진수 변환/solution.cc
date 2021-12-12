#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int bin[50], i = 0;
    long long n;
    cin >> n;

    while (n > 0) {
        bin[i++] = n % 2;
        n /= 2;
    }
    
    while (i > 0) {
        cout << bin[i - 1];
        i -= 1;
    };

    return 0;
}