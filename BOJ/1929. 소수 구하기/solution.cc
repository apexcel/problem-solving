#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int m, n, arr_size;
    cin >> m >> n;

    arr_size = n - m + 1;
    int nums[arr_size];
    for (int i = 0; i < arr_size; i += 1) nums[i] = m + i;
    if (nums[0] == 1) nums[0] = -1;

    for (int i = 0; i < arr_size; i += 1) {
        if (nums[i] == -1) continue;

        for (int j = 2; j * j <= nums[i]; j += 1) {
            if (nums[i] % j == 0) {
                for (int k = 0; k * k <= nums[i]; k += j) nums[i + k] = -1;
            }
        }
    }

    for (int x: nums) if (x > 0) cout << x << '\n';
    return 0;
}