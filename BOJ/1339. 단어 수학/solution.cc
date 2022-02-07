#include <iostream>
#include <string>
#include <algorithm>
#include <cmath>

using namespace std;

int table[26];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    while (n--) {
        string s;
        cin >> s;
        int len = s.size();

        for (int i = 0; i < len; i += 1) {
            table[s[i] - 65] += pow(10, len - i - 1);
        }
    }

    sort(table, table + 26, greater<int>());

    int num = 9, sum = 0;
    for (int x: table) {
        if (x == 0) {
            cout << sum << '\n';
            return 0;
        }
        sum += x * num;
        num -= 1;
    }

    return 0;
}