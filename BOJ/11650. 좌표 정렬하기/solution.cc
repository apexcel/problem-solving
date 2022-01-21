#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int cmp(pair<int, int> a, pair<int, int> b) {
    if (a.first == b.first) return a.second < b.second;
    return a.first < b.first;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    vector<pair<int, int>> coords;
    while (n--) {
        int x, y;
        cin >> x >> y;
        coords.push_back(make_pair(x, y));
    }

    sort(coords.begin(), coords.end(), cmp);
    for (auto x: coords) cout << x.first << " " << x.second << "\n";
    return 0;
}