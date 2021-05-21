#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    string replaceDigits(string s) {
        string str = s;
        for (int i = 0; i < s.size(); i += 2) {
            str[i+1] = s[i] + (s[i + 1] - '0');
        }
        return str;
    }
};

int main() {
    Solution solution;
    cout << solution.replaceDigits("v0g6s4d");
    return 0;
}
