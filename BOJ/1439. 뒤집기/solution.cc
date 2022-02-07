#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    char ch, prev;
    int cnt[2] = {0,};
    while (ch = getchar()) {
        if (ch != '1' && ch != '0') break;
        if (ch != prev) cnt[ch - '0'] += 1;
        prev = ch;
    }

    cout << (cnt[0] < cnt[1] ? cnt[0] : cnt[1]);

    return 0;
}