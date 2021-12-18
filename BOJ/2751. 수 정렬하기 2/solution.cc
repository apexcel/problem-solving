#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, nums[1000001];

    cin >> n;
    for (int i = 0; i < n; i += 1) cin >> nums[i];
    sort(begin(nums), (nums + n));

    for (int i = 0; i < n; i += 1) cout << nums[i] << '\n';

    return 0;
}