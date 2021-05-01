// https://leetcode.com/problems/matrix-diagonal-sum/
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int sum = 0, size= mat.size();
        for (int i = 0; i < size; i++) {
            sum += mat[i][i] + mat[i][size - i - 1];
        }

        return (size % 2 != 0) ? sum - mat[size/2][size/2] : sum;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> vec = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    };
    cout << solution.diagonalSum(vec);
    return 0;
}