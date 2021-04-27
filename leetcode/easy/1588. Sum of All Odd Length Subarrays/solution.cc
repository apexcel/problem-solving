// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

class Solution {
public:
    int sumOddLengthSubarrays(vector<int>& arr) {
        int sum = 0;
        for (int i = 1; i <= arr.size(); i += 2) {
            for (int j = 0; i + j <= arr.size(); j += 1) {
                sum = accumulate(arr.begin() + j, arr.begin() + j + i, sum);
            }
        }
        cout << sum;
        return sum;
    }
};

int main() {
    Solution solution;
    vector<int> vec = {1, 4, 2, 5, 3};
    solution.sumOddLengthSubarrays(vec);
    return 0;
}