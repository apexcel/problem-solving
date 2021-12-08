#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    char s[1000001];
    int cnt = 0, i = 0;
    cin.getline(s, 1000001);

    if (s[0] == ' ') cnt -= 1;
    for (i = 0; s[i]; i += 1) {
        if (s[i] == ' ') cnt += 1;
    }
    if (s[i - 1] == ' ') cnt -= 1;
    cout << (cnt + 1);
}