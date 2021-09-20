#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int hh, mm;
    cin >> hh >> mm;

    int time = (hh == 0 ? 24 * 60 : hh * 60) + mm;
    int h = (time - 45) / 60, m = (time - 45) % 60;
    cout << (h == 24 ? 0 : h) << " " << m;
    return 0;
}