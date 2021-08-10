#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int res;
        for (int i = 0; i < nums.size(); i++) {
            int val = abs(nums[i]);
            if (nums[val] >= 0) {
                nums[val] *= -1;
            }
            else {
                res = val;
                break;
            }
        }
        return res;
    }
};