// https://leetcode.com/problems/destination-city/
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    string destCity(vector<vector<string>>& paths) {
        unordered_map<string, string> umap;
        string res = paths[0][0];
        for (int i = 0; i < paths.size(); i++) {
            umap[paths[i][0]] = paths[i][1];
        }
        while (umap.find(res) != umap.end()) {
            res = umap[res];
        }
        cout << res;
        return res;
    }
};

int main() {
    Solution solution;
    vector<vector<string>> vec = {
        {"B" ,"C"},
        {"D" ,"B"},
        {"C" ,"A"}
    };
    solution.destCity(vec);
    return 0;
}