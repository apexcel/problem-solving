// https://www.acmicpc.net/problem/1316
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int len, cnt = 0;
    cin >> len;

    for (int i = 0; i < len; i += 1) {
        vector<int> a(26, 0);
        int prev;
        string s;
        cin >> s;

        cnt += 1;
        for (int j = 0; j < s.size(); j += 1) {
            int idx = s[j] - 97;
            if (a[idx] == 0) {
                a[idx] = 1;
                prev = idx;
                continue;
            }
            else if (prev != idx && a[idx] > 0) {
                cnt > 0 ? cnt -= 1 : cnt;
                break;
            }
        }
    }
    cout << cnt;
    return 0;
}