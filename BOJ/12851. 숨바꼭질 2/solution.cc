#include <iostream>
#include <queue>

#define LIMIT 100000
#define pii pair<int, int>

using namespace std;

int visited[LIMIT + 1]; 

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, k, mn = 987654321, total = 0;
    cin >> n >> k;
    queue<pii> q;
    q.push(make_pair(n, 0));

    while (!q.empty()) {
        int cur = q.front().first;
        int cnt = q.front().second;
        q.pop();

        visited[cur] = 1;

        if (mn < cnt) break;

        if (cur == k) {
            mn = cnt;
            total += 1;
            continue;
        }

        for (auto val : { cur - 1, cur + 1, 2 * cur }) {
            if (val < 0 || val > LIMIT || visited[val]) continue;
            q.push(make_pair(val, cnt + 1));
        }
    }

    cout << mn << '\n' << total;
    return 0;
}