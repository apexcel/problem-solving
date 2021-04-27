// https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/    
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int countConsistentStrings(string allowed, vector<string>& words) {
        int count = 0;
        unordered_map<char, int> umap;
        
        for (auto ch: allowed) {
            umap[ch] += 1;
        }

        for (auto w: words) {
            int i = 0;
            for (; i < w.size(); i += 1) {
                if (umap.find(w[i]) == umap.end()) break;
            }
            if (i == w.size()) count += 1;
        }
        cout << count;
        return count;
    }
};

int main() {
    Solution solution;
    string allowed = "ab";
    vector<string> words = {"ad", "bd", "aaab", "baa", "badab"};
    solution.countConsistentStrings(allowed, words);
    return 0;
}