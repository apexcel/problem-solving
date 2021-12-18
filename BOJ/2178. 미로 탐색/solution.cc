#include <iostream>
#include <string>
#include <queue>

using namespace std;

int h, w, visited[101][101], dist[101][101];
int dir[4][2] = {{0, -1}, {1, 0}, {0, 1}, {-1, 0}};
string board[101];

void bfs() {
    visited[0][0] = 1;
    queue<pair<int, int>> q;
    q.push(make_pair(0, 0));

    while (!q.empty()) {
        pair<int, int> coord = q.front();
        int x = coord.first, y = coord.second;
        q.pop();

        for (int i = 0; i < 4; i += 1) {
            int nx = x + dir[i][0], ny = y + dir[i][1];
            if (nx < 0 || ny < 0 || nx >= w || ny >= h || visited[ny][nx] || board[ny][nx] == '0') continue;
            visited[ny][nx] = 1;
            dist[ny][nx] = dist[y][x] + 1;
            q.push(make_pair(nx, ny));
        }
    }

    cout << dist[h - 1][w - 1] + 1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> h >> w;
    for (int y = 0; y < h; y += 1) {
        cin >> board[y];
    }

    bfs();

    return 0;
}