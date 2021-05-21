#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& l, vector<int>& r) {
        vector<bool> res;
        for (int i = 0; i < l.size(); i += 1) {
            vector<int> sliced(nums.begin() + l[i], nums.begin() + r[i] + 1);
            res.push_back(canRearrange(sliced));
        }
        return res;
    }

    bool canRearrange(vector<int>& subArr) {
        sort(subArr.begin(), subArr.end());
        int diff = subArr[1] - subArr[0];

        for (int i = 0; i < subArr.size() - 1; i += 1) {
            if (subArr[i+1] - subArr[i] != diff) return false;
        }
        return true;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {4, 6, 5, 9, 3, 7}, l = {0, 0, 2}, r = {2, 3, 5};
    vector<bool> res = solution.checkArithmeticSubarrays(nums, l, r);

    for (int i = 0; i < res.size(); i += 1) {
        cout << res[i] << endl;
    }
    return 0;
}