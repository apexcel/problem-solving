#include <vector>

using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int profit = 0, prev = prices[0];
        for (int i = 1; i < prices.size(); ++i) {
            int diff = prices[i] - prev;
            prev = prices[i];
            if (diff > 0) {
                profit += diff;
            }
        }
        return profit;
    }
};