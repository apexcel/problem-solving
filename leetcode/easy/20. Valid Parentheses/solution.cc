#include <string>
#include <map>
#include <stack>

using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> stack;
        map<char, char> map;
        map['('] = ')';
        map['{'] = '}';
        map['['] = ']';

        for (int i = 0; i < s.size(); i++) {
            if (map[s[i]]) {
                stack.push(map[s[i]]);
                continue;
            }
            else {
                if (stack.size() == 0) return false;
                if (stack.top() != s[i]) return false;
                stack.pop();
            }
        }
        return stack.size() == 0;
    }
};