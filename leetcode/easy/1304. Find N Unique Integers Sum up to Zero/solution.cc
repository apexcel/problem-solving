#include <vector>

using namespace std;

class Solution {
public:
    vector<int> sumZero(int n) {
        vector<int> vec(n-1, 0);
        int sum = 0;
        for (int i = 1; i < n; i += 1) {
            vec[i-1] = i;
            sum += i;
        }
        vec.push_back(-sum);
        return vec;
    }
};