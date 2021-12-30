#include <iostream>
#include <vector>

using namespace std;

vector<int> vec;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc, n, k, pos;

    cin >> tc;
    while (tc--) {
        cin >> n >> k;

        vec.clear();
        for (int i = 1; i <= n; i += 1) vec.push_back(i);

        int pos = 0;
        while (vec.size() > 2) {
            vec.erase(vec.begin() + pos);
            pos = (pos + k - 1) % vec.size();
        }

        for (int i = 0; i < 2; i += 1) {
            cout << vec[i] << ' ';
        }
        cout << '\n';
    }

    return 0;
}