#include <vector>

using namespace std;

const long MINIMUM = -9876543210;
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        long f = MINIMUM, s = MINIMUM, t = MINIMUM;

        for (int n: nums) {
            if (n == f || n == s || n == t) continue;
            if (n > f) {
                t = s;
                s = f;
                f = n;
            }
            else if (n > s) {
                t = s;
                s = n;
            }
            else if (n > t) {
                t = n;
            }
        }
        return t == MINIMUM ? f : t;
    }
};