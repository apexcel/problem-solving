#include <vector>

using namespace std;

class Solution {
public:
    void rotate(vector<vector<int>>& m) {
        int size = m.size(), temp;
        for (int i = 0; i < size / 2; i++) {
            for (int j = i; j < size - 1 - i; j++) {
                temp = m[i][j];
                m[i][j] = m[size - 1 - j][i];
                m[size - 1 - j][i] = m[size - 1 - i][size - 1 - j];
                m[size - 1 - i][size - 1 - j] = m[j][size - 1 - i];
                m[j][size - 1 - i] = temp;
            }
        }
    }
};