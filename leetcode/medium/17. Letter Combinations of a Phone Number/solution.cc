#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits == "") return {};
        vector<string> res = {""};
        vector<string> table = { "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

        for (int i = 0; i < digits.size(); i++) {
            vector<string> temp;
            string s = table[digits[i] - '0'];
            
            for (char ch: s) {
                for (int j = 0; j < res.size(); j++) {
                    temp.push_back(res[j] + ch);
                }
            }
            swap(temp, res);
        }
        return res;
    }
};