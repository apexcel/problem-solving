#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    
    int x, y;
    while (cin >> x >> y) {
        cout << x + y << '\n';
    }
    return 0;
}