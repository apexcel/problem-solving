#include <iostream>

using namespace std;

char nums[1000001];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    cin >> nums;

    int i = 0, n = 0;
    for (i; nums[i]; i += 1) n += nums[i] - '0';
    int cnt = i > 1 ? 1 : 0;

    while (n > 9) {
        int sum = 0;
        while (n) {
            sum += n % 10;
            n /= 10;
        }
        cnt += 1;
        n = sum;
    }

    cout << cnt << '\n';
    cout << (n % 3 == 0 ? "YES" : "NO");
    return 0;
}