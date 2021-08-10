#include <vector>

using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> p1(nums.size(), 1), p2(nums.size(), 1), res;

        for (int i = 1; i < nums.size(); i++) {
            p1[i] = p1[i-1] * nums[i-1];
        }

        for (int i = nums.size() - 2; i >= 0; i--) {
            p2[i] = p2[i+1] * nums[i+1];
        }

        for (int i = 0; i < p1.size(); i++) {
            res.push_back(p1[i] * p2[i]);
        }

        return res;
    }
};