#include <vector>

using namespace std;

class Solution {
public:
    vector<vector<int>> res;
    vector<int> temp;

    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        pick(candidates, target, 0);
        return res;
    }

    void pick(vector<int>& candidates, int target, int index) {
        if (target == 0) {
            res.push_back(temp);
            return;
        }

        if (index == candidates.size() || target < 0) {
            return;
        }

        temp.push_back(candidates[index]);
        pick(candidates, target - candidates[index], index);
        temp.pop_back();
        pick(candidates, target, index + 1);
    }
};