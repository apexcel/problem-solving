    #include <iostream>
    #include <queue>

    using namespace std;

    typedef struct pos {
        int x, y, d;
    };

    int dir[4][2] = {
        {0, -1},
        {1, 0},
        {0, 1},
        {-1, 0},
    };
    int board[1001][1001], h, w;
    queue<pos> q;

    int solution() {
        while (!q.empty()) {
            pos p = q.front();
            q.pop();

            for (int i = 0; i < 4; i += 1) {
                int nx = p.x + dir[i][0], ny = p.y + dir[i][1];
                if (nx < 0 || ny < 0 || nx >= w || ny >= h || board[ny][nx] != 0) continue;
                board[ny][nx] = p.d + 1;
                q.push({x: nx, y: ny, d: p.d + 1});
            }
        }

        int day = 1;
        for (int y = 0; y < h; y += 1) {
            for (int x = 0; x < w; x += 1) {
                if (board[y][x] == 0) return -1;
                if (day < board[y][x]) day = board[y][x];
            }
        }

        return day - 1;
    }

    int main() {
        ios_base::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);

        cin >> w >> h;

        for (int i = 0; i < h; i += 1) {
            for (int j = 0; j < w; j += 1) {
                cin >> board[i][j];
                if (board[i][j] == 1) q.push({x: j, y: i, d : 1});
            }
        }

        cout << solution();

        return 0;
    }