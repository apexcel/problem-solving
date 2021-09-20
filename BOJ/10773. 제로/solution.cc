#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    vector<int> s;
    int len, sum = 0;
    cin >> len;

    for (int i = 0; i < len; i += 1) {
        int k;
        cin >> k;
        k == 0 ? s.pop_back() : s.push_back(k);
    }

    for (auto x: s) {
        sum += x;
    }
    cout << sum;
    return 0;
}