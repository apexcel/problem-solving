#include <string>

using namespace std;

class Solution {
public:
    string removeOuterParentheses(string s) {
        int count = 0;
        string res = "";
        for (char ch: s) {
            if (ch == '(') {
                if (count++) res += '(';
            }
            else {
                if (--count) res += ')';
            }
        }
        return res;
    }
};

int main() {
    return 0;
}