#include <iostream>
#include <deque>
#include <algorithm>

#define pii pair<int, int>

using namespace std;

bool cmp(pii p1, pii p2) {
    return p1.second > p2.second;
}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n, m, t, v;
    cin >> t;

    while (t--) {
        deque<pii> dq;
        cin >> n >> m;
        for (int i = 0; i < n; i += 1) {
            cin >> v;
            dq.push_back(make_pair(i, v));
        }

        deque<pii> copy = dq;
        sort(copy.begin(), copy.end(), cmp);
        
        int p = 0;
        while (!dq.empty()) {
            pii f = dq.front();
            dq.pop_front();
            if (f.second == copy[p].second) {
                if (f.first == m) {
                    printf("%d\n", p + 1);
                    break;
                }
                p += 1;
            }
            else {
                dq.push_back(f);
            }
        }
    }

    return 0;
}