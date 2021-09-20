// https://www.acmicpc.net/problem/11723
#include <iostream>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int len, n, res = 0;
    string fn;

    cin >> len;
    for (int i = 0; i < len; i += 1) {
        cin >> fn;
        if (fn[0] == 'a'&& fn[1] == 'd') {
            cin >> n;
            res |= (1 << n);
        }
        else if (fn[0] == 'r') {
            cin >> n;
            res &= ~(1 << n);
        }
        else if (fn[0] == 'c') {
            cin >> n;
            res & (1 << n) ? cout << "1\n" : cout << "0\n";
        }
        else if (fn[0] == 't') {
            cin >> n;
            res & (1 << n) ? res &= ~(1 << n) : res |= (1 << n);
        }
        else if (fn[1] == 'l') res = (1 << 21) - 1;
        else res = 0;
    }

    return 0;
} 