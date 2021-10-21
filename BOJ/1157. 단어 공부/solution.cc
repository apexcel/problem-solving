#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    vector<int> a(26, 0);
    int m = 0, p = 0, idx = 0;
    string s;
    cin >> s;
    

    for (int i = 0; i < s.size(); i += 1) {
        a[toupper(s[i]) - 65] += 1;
    }

    for (int i = 0; i < a.size(); i += 1) {
        if (a[i] >= m) {
            p = m;
            m = a[i];
            idx = i;
        }
    }
    cout << (p == m ? '?' : (char)(65 + idx));
    return 0;
}