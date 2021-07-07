#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> parens;
        gen_parens(parens, 0, 0, n, "");
        return parens;
    }

    void gen_parens(vector<string>& parens, int open, int close, int len, string str) {
        if (str.size() == 2 * len) {
            parens.push_back(str);
            return;
        }

        if (open < len) gen_parens(parens, open + 1, close, len, str + "(");
        if (close < open) gen_parens(parens, open, close + 1, len, str + ")");
    }
};