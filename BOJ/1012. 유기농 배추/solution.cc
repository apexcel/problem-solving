#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int dx[4] = {0, 1, 0, -1};
int dy[4] = {-1, 0, 1, 0};

void dfs(vector<vector<int>> &farm, int m, int n, int x, int y) {
    if (farm[y][x] == 2 || farm[y][x] == 0) return;
    farm[y][x] = 2;

    for (int i = 0; i < 4; i += 1) {
        int cx = x + dx[i], cy = y + dy[i];

        if (cx >= 0 && cy >= 0 && cx < m && cy < n) {
            dfs(farm, m, n, cx, cy);
        }
    }
}

void bfs(vector<vector<int>> &farm, int m, int n, int x, int y) {
    farm[y][x] = 2;
    queue<pair<int, int>> q;
    q.push(make_pair(x, y));

    while(!q.empty()) {
        int yy = q.front().second;
        int xx = q.front().first;
        q.pop();

        for (int i = 0; i < 4; i += 1) {
            int cx = xx + dx[i], cy = yy + dy[i];

            if (cx >= 0 && cy >= 0 && cx < m && cy < n) {
                if (farm[cy][cx] == 2 || farm[cy][cx] == 0) continue;
                q.push(make_pair(cx, cy));
                farm[cy][cx] = 2;
            }
        }
    }
}

int solution(int m, int n, vector<pair<int, int>> coords) {
    int cnt = 0;
    vector<vector<int>> farm(n, vector<int>(m, 0));
    for (int i = 0; i < coords.size(); i += 1) {
        farm[coords[i].second][coords[i].first] = 1;
    }

    for (int y = 0; y < n; y += 1) {
        for (int x = 0; x < m; x += 1) {
            if (farm[y][x] == 1) {
                cnt += 1;
                bfs(farm, m, n, x, y);
            }
        }
    }

    cout << cnt << '\n';
    return 0;
}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int tc;
    cin >> tc;
    while (tc--) {
        int m, n, k;
        cin >> m >> n >> k;

        vector<pair<int, int>> coords;
        while (k--) {
        int x, y;
            cin >> x >> y;
            coords.push_back(make_pair(x, y));
        }
        solution(m, n, coords);
    }

    return 0;
}