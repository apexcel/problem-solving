#include <vector>

using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        for (int i = 0, j = 0; i < nums.size() && j < nums.size(); i++) {
            if (nums[j] != 0) j++;
            if (i > j) swap(nums[j], nums[i]);
        }
    }
};
