#include <vector>

using namespace std;

class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> res;
        pick(nums, 0, res);
        return res;
    }
private:
    void pick(vector<int>& nums, int depth, vector<vector<int>>& res) {
        if (depth >= nums.size()) {
            res.push_back(nums);
            return;
        }

        for (int i = depth; i < nums.size(); i += 1) {
            swap(nums[depth], nums[i]);
            pick(nums, depth + 1, res);
            swap(nums[depth], nums[i]);
        }
    }
};