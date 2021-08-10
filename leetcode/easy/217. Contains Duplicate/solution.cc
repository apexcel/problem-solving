#include <vector>
#include <unordered_set>

using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> uset;
        for (int n: nums) {
            if (uset.find(n) != uset.end()) return true;
            uset.insert(n);
        }
        return false;
    }
};