#include <vector>

using namespace std;

class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> res;
        vector<int> path;
        recursion(res, nums, path, 0);
        return res;
    }

    void recursion(vector<vector<int>>& res, vector<int>& nums, vector<int>& path, int index) {
        res.push_back(path);
        for (int i = index; i < nums.size(); i += 1) {
            path.push_back(nums[i]);
            recursion(res, nums, path, i + 1);
            path.pop_back();
        }
        return;
    }
};