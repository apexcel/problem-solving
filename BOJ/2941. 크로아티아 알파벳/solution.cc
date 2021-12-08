#include <iostream>
#define cp(x, y) (s[i] == x && s[i+1] == y)
using namespace std;

char s[101];
int cnt = 0;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> s;
    for (int i = 0; s[i]; i += 1, cnt += 1) {
        if (cp('c', '=') || cp('c', '-') || cp('d', '-') || cp('l', 'j') || cp('n', 'j') || cp('s', '=') || cp('z', '=')) i += 1;
        else if (s[i] == 'd' && s[i+1] == 'z' && s[i+2] == '=') i += 2;
    }
    cout << cnt;
}