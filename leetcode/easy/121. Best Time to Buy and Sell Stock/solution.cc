#include <vector>

using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minimum = prices[0], res = 0;
        for (int i = 0; i < prices.size(); ++i) {
            minimum > prices[i]
                ? minimum = prices[i]
                : res = max(res, prices[i] - minimum);
        }
        return res;
    }
};