#include <iostream>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int res[10001] = {0, }, carry = 0, idx = 0, len1, len2, num1, num2;
    string s1, s2;
    cin >> s1 >> s2;

    len1 = s1.size(); 
    len2 = s2.size();

    while (len1 || len2 || carry) {
        if (len1) {
            num1 = s1[len1 - 1] - '0';
            len1 -= 1;
        }
        if (len2) {
            num2 = s2[len2 - 1] - '0';
            len2 -= 1;
        }
        res[idx++] = (num1 + num2 + carry) % 10;
        carry = num1 + num2 + carry > 9 ? 1 : 0;
        num1 = num2 = 0;
    }
    for (int i = idx - 1; i >= 0; i -= 1) cout << res[i];
    return 0;
}