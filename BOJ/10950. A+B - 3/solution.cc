#include<iostream>

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int a, b, t;
    cin >> t;
    for (int i = 0; i < t; i += 1) {
        cin >> a >> b;
        cout << (a + b) << endl;
    }
    return 0;
}