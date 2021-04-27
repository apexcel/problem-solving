#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
        string s1, s2;
        for (int i = 0; i < word1.size(); ++i) {
            s1 += word1[i];
        }
        for (int i = 0; i < word2.size(); ++i) {
            s2 += word2[i];
        }
        return s1 == s2 ? 1 : 0;
    }
};

int main() {
    Solution solution;
    vector<string> word1 = {"ab", "c"};
    vector<string> word2 = {"a", "bc"};

    solution.arrayStringsAreEqual(word1, word2);
    return 0;
}