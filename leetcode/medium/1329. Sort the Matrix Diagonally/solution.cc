#include <iostream>
#include <vector>
#include <unordered_map>
#include <deque>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {
        int rows = mat.size(), cols = mat[0].size();
        unordered_map<int, deque<int>> umap;

        for (int i = 0; i < rows; i += 1) {
            for (int j = 0; j < cols; j += 1) {
                umap[i-j].push_back(mat[i][j]);
            }
        }

        for (auto it: umap) {
            sort(umap[it.first].begin(), umap[it.first].end());
        }

        for (int i = 0; i < rows; i += 1) {
            for (int j = 0; j < cols; j += 1) {
                mat[i][j] = umap[i-j].front();
                umap[i-j].pop_front();
            }
        }

        return mat;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> mat = {
        {3, 3, 1, 1},
        {2, 2, 1, 2},
        {1, 1, 1, 2}
    };

    vector<vector<int>> res = solution.diagonalSort(mat);

    for (int i = 0; i < res.size(); i += 1) {
        for (int j = 0; j < res[0].size(); j += 1) {
            cout << res[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}