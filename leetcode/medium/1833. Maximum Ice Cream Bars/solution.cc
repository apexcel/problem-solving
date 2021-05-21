#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxIceCream(vector<int>& costs, int coins) {
        sort(costs.begin(), costs.end());
        int i = 0;
        for (i = 0; i < costs.size(); i += 1) {
            if (coins > 0 && costs[i] <= coins) coins -= costs[i];
            else break;
        }
        return i;
    }
};

int main() {
    Solution solution;
    vector<int> costs = {1, 6, 3, 1, 2, 5};
    cout << solution.maxIceCream(costs, 20);

    return 0;
}