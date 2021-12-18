#include <iostream>

using namespace std;

int nums[3], n, k, val;

void calc(int x) {
    if (x > n) return;
    if (x > val) val = x;
    for (int i = 0; i < k; i += 1) {
        calc(x * 10 + nums[i]);
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> n >> k;

    for (int i = 0; i < k; i += 1) cin >> nums[i];
    calc(0);
    cout << val;

    return 0;
}