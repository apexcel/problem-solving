#include <iostream>
#include <queue>

using namespace std;

typedef pair<int, int> pii;

int is_visited[1000001];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, k;
    cin >> n >> k;

    queue<pii> q;
    int pos = n, cnt = 0;
    q.push(make_pair(n, cnt));

    while (!q.empty()) {
        pii cur = q.front();
        pos = cur.first;
        cnt = cur.second;
        q.pop();
        if (pos == k) break;
        if (pos > 1000001 || is_visited[pos]) continue;
        is_visited[pos] = 1;

        q.push(make_pair(pos - 1, cnt + 1));
        q.push(make_pair(2 * pos, cnt + 1));
        q.push(make_pair(pos + 1, cnt + 1));
    }

    cout << cnt;
    return 0;
}