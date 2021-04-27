#include <iostream>
using namespace std;

int tc, n, m;
bool are_friends[10][10] = {0, };
bool matched[10] = {0, };

int countpair(bool matched[10]) {
    int first_free = -1;
    for (int i = 0; i < n; ++i) {
        if (!matched[i]) {
            first_free = i;
            break;
        }
    }

    if (first_free == -1) return 1;
    int ret = 0;
    for (int pair_with = first_free + 1; pair_with < n; ++pair_with) {
        if (!matched[pair_with] && are_friends[first_free][pair_with]) {
            matched[first_free] = matched[pair_with] = true;
            ret += countpair(matched);
            matched[first_free] = matched[pair_with] = false;
        }
    }
    return ret;
}

int main() {
    cin >> tc;
    for (int i = 0; i < tc; ++i) {
        cin >> n >> m;
        for (int j = 0; j < m; ++j) {
            int f1, f2;
            cin >> f1 >> f2;
            are_friends[f1][f2] = are_friends[f2][f1] = true;
        }
        cout << countpair(matched) << endl;
    }
}