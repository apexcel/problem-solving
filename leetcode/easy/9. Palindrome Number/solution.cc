#include <string>

using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        string X = to_string(x);
        string str = "";
        for (int i = X.size() - 1; i >= 0; i -= 1) {
            str += X[i];
        }
        return str == X;
    }
};