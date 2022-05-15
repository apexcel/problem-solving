#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int dp[10001];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, k, v;
    vector<int> nums;

    cin >> n >> k;
    while (n--) {
        cin >> v;
        nums.push_back(v);
    }
    sort(nums.begin(), nums.end());
    dp[0] = 1;

    for (int num: nums) {
        for (int i = num; i <= k; i += 1) {
            dp[i] += dp[i - num];
        }
    }

    cout << dp[k];
    return 0;
}