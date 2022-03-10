#include <iostream>
#include <string>
#include <queue>
#include <set>

#define pis pair<int, string>

using namespace std;


int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    queue<pis> q;
    set<string> set;
    string n;
    int k, m, mx = -1, nxt = -1;
    cin >> n >> k;
    m = n.size();

    q.push(make_pair(0, n));

    while (!q.empty()) {
        int cnt = q.front().first;
        string str = q.front().second;
        q.pop();

        if (cnt > nxt) {
            nxt = cnt;
            set.clear();
        }
        if (cnt == k && mx < stoi(str)) mx = stoi(str);
        if (cnt > k) break;

        for (int i = 0; i < m; i += 1) {
            for (int j = i + 1; j < m; j += 1) {
                string copy = str;
                swap(copy[i], copy[j]);
                if (copy[0] != '0' && set.find(copy) == set.end()) {
                    q.push(make_pair(cnt + 1, copy));
                    set.insert(copy);
                }
            }
        }
    }

    cout << mx;

    return 0;
}