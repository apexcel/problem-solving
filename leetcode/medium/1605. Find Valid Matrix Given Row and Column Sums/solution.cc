#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<vector<int>> restoreMatrix(vector<int>& rowSum, vector<int>& colSum) {
        int r = rowSum.size(), c = colSum.size();
        vector<vector<int>> restored(r, vector<int>(c, 0));
        for (int y = 0; y < r; y += 1) {
            for (int x = 0; x < c; x += 1) {
                restored[y][x] = min(rowSum[y], colSum[x]);
                rowSum[y] -= restored[y][x];
                colSum[x] -= restored[y][x];
            }
        }
        return restored;
    }
};

int main() {
    return 0;
}

