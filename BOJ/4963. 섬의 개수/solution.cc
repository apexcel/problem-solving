#include <iostream>
#include <vector>
#include <queue>

using namespace std;

typedef pair<int, int> pii;

int dir[8][2] = {
    {0, -1},
    {1, -1},
    {1, 0},
    {1, 1},
    {0, 1},
    {-1, 1},
    {-1, 0},
    {-1, -1}
};

void countIsle(vector<vector<int>>& board, int bx, int by, int h, int w) {
    queue<pii> q;
    q.push(make_pair(bx, by));

    while (!q.empty()) {
        int x = q.front().first, y = q.front().second;
        q.pop();

        for (int i = 0; i < 8; i += 1) {
            int nx = x + dir[i][0], ny = y + dir[i][1];
            if (nx < 0 || ny < 0 || nx >= w || ny >= h || board[ny][nx] != 1) continue;
            board[ny][nx] = 2;
            q.push(make_pair(nx, ny));
        }
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int w, h;
    while (true) {
        int cnt = 0;
        cin >> w >> h;
        if (!w && !h) return 0;

        vector<vector<int>> board(h, vector<int>(w, 0));

        for (int y = 0; y < h; y += 1) {
            for (int x = 0; x < w; x += 1) {
                cin >> board[y][x];
            }
        }

        for (int y = 0; y < h; y += 1) {
            for (int x = 0; x < w; x += 1) {
                if (board[y][x] != 1) continue;
                countIsle(board, x, y, h, w);
                cnt += 1;
            }
        }
        cout << cnt << '\n';
    }

    return 0;
}