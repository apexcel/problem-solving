#include <string>

class Solution {
public:
    string truncateSentence(string s, int k) {
        string res = "";
        int counter = 0;
        for (char ch: s) {
            if (ch == ' ') counter++;
            if (counter < k) res += ch;
        }

        return res;
    }
};

int main() {
    
}