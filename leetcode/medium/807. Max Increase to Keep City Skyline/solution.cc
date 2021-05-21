#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
        vector<int> cols;
        vector<int> rows;
        int sum = 0;

        for (auto it: grid) {
            int max = *max_element(it.begin(), it.end());
            rows.push_back(max);
        }

        int size = grid[0].size();

        for (int x = 0; x < size; x += 1) {
            int max = 0;
            for (int y = 0; y < grid.size(); y += 1) {
                if (max < grid[y][x]) max = grid[y][x];
            }
            cols.push_back(max);
        }

        for (int x = 0; x < size; x += 1) {
            for (int y = 0; y < grid.size(); y += 1) {
                sum += min(rows[x], cols[y]) - grid[x][y];
            }
        }
        cout << sum;
        return sum;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> vec = {
        {3,0,8,4},
        {2,4,5,7},
        {9,2,6,3},
        {0,3,1,0}
    };

    solution.maxIncreaseKeepingSkyline(vec);
    return 0;
}