#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    string countAndSay(int n) {
        if (n == 1) return "1";

        string str = countAndSay(n - 1);

        int count = 0;
        char prev;
        string buffer = "";

        for (char ch: str) {
            if (ch == prev) {
                count++;
            }
            else {
                if (count != 0) {
                    buffer += to_string(count) + prev;
                }
                prev = ch;
                count = 1;
            }
        }

        if (count != 0) {
            buffer += to_string(count) + prev;
        }
    return buffer;
    }
};

int main() {
    Solution sol;
    cout << sol.countAndSay(6);
}