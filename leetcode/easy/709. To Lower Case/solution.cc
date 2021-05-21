#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    string toLowerCase(string s) {
        for (char &ch: s) {
            if (ch >= 65 && ch <= 90) {
                ch += 32;
            }
        }
        return s;
    }
};

int main() {
    Solution solution;
    cout << solution.toLowerCase("Hello WORLD!");
    return 0;
}