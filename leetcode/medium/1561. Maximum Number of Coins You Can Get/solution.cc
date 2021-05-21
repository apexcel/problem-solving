#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxCoins(vector<int>& piles) {
        int len = piles.size() * 2 / 3, sum =0;
        sort(piles.begin(), piles.end(), greater<>());

        for (int i = 1; i <= len; i += 2) {
            sum += piles[i];
        }
        return sum;
    }
};

int main() {
    Solution solution;
    vector<int> vec = {8, 7, 4, 2, 2, 1};
    cout << solution.maxCoins(vec);
    return 0;
}