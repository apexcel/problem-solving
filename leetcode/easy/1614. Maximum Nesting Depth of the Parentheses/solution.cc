// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
#include <iostream>
#include <string>

using namespace std;

class Solution {
    public:
        int maxDepth(string s) {
            int res = 0, cnt = 0;

            for (int i = 0; i < s.length(); ++i) {
                if (s[i] == '(') cnt++;
                if (s[i] == ')') cnt--;
                res = max(res, cnt);
            }
            return res;
        };
};

int main() {
    Solution solution;
    int ans = solution.maxDepth("(1)+((2))+(((3)))");
    cout << ans;
    return 0;
}