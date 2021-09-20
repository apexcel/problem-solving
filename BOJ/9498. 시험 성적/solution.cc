// https://www.acmicpc.net/problem/9498
#include <iostream>

using namespace std;

int main() {
    int s;
    cin >> s;
    cout << (s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : s >= 60 ? 'D' : 'F');
    return 0;
}