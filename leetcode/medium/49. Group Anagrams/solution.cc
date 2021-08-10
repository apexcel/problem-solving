#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> umap;
        vector<vector<string>> res;

        for (string str: strs) {
            string s = str;
            sort(s.begin(), s.end());
            umap[s].push_back(str);
        }

        for (auto it = umap.begin(); it != umap.end(); it++) {
            res.push_back(it->second);
        }

        return res;
    }
};