#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.size() != t.size()) return false;
        
        unordered_map<char, int> umap;
        for (char ch: s) {
            umap[ch]++;
        }

        for (int i = 0; i < t.size(); i++) {
            if (umap[t[i]]) umap[t[i]]--;
            else return false;
        }
        return true;
    }
};