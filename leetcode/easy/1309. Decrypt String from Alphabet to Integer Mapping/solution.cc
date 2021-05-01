// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    string freqAlphabets(string s) {
        string output = "";
        for (int i = 0; i < s.size(); i++) {
            int ch = 96;
            if (i + 2 < s.size() && s[i+2] == '#') {
                ch += 10 * (s[i] - '0') + (s[i+1] - '0');
                i += 2;
            }
            else {
                ch += s[i] - '0';
            }
            output += (char)(ch);
        }
        cout << output;
        return output;
    }
};

int main() {
    Solution solution;
    string s = "21#523#12#22#611#71910#721#18#8";
    solution.freqAlphabets(s);
    return 0;
}