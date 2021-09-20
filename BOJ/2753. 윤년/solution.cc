#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int input;
    cin >> input;
    (input % 4 == 0 && input % 100 != 0) || input % 400 == 0 ? cout << 1 : cout << 0;
    
    return 0;
}