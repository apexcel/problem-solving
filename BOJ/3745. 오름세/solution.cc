#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    while (cin >> n) {
        vector<int> vec;

        while (n--) {
            int k;
            cin >> k;
            int pos = lower_bound(vec.begin(), vec.end(), k) - vec.begin();

            if (pos == vec.size()) vec.push_back(k);
            else if (vec[pos] > k) vec[pos] = k;
        }
        cout << vec.size() << '\n';
    }

    return 0;
}