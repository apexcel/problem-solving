#include <iostream>
#include <queue>
#include <string>

#define MAX 1001
#define ITEM(x, y, b) make_pair(make_pair(x, y), b)

using namespace std;

int n, m;
int board[MAX][MAX], moved[MAX][MAX];
bool state[MAX][MAX][2];
int dir[4][2] = {
    {0, -1},
    {1, 0},
    {0, 1},
    {-1, 0},
};

bool is_valid_position(int x, int y) {
    return y >= 0 && x >= 0 && y < n && x < m;
}

bool is_wall(int x, int y) {
    return board[y][x] == 1;
}

void bfs(int bx, int by) {
    queue<pair<pair<int, int>, bool>> q;
    q.push(ITEM(bx, by, true));
    state[by][bx][0] = true;
    state[by][bx][1] = true;
    moved[by][bx] = 1;

    while (!q.empty()) {
        int x = q.front().first.first;
        int y = q.front().first.second;
        bool can_break = q.front().second;
        q.pop();

        if (y == n - 1 && x == m - 1) {
            cout << moved[y][x];
            return;
        }

        for (auto d: dir) {
            int nx = x + d[0], ny = y + d[1];
            if (!is_valid_position(nx, ny)) continue;

            // 다음 노드가 벽이고 부술 수 있는 경우
            if (is_wall(nx, ny) && can_break) {
                state[ny][nx][1] = 1;
                moved[ny][nx] = moved[y][x] + 1;
                q.push(ITEM(nx, ny, false));
            }
            // 다음 노드가 벽이 아닌 경우
            if (!is_wall(nx, ny)) {
                // 벽을 부수지 않은 경우
                if (can_break && !state[ny][nx][0]) {
                    state[ny][nx][0] = 1;
                    moved[ny][nx] = moved[y][x] + 1;
                    q.push(ITEM(nx, ny, true));
                }
                // 벽을 부수고 온 경우
                if (!can_break && !state[ny][nx][1]) {
                    state[ny][nx][1] = 1;
                    moved[ny][nx] = moved[y][x] + 1;
                    q.push(ITEM(nx, ny, false));
                }
            }
        }
    }
    cout << -1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> n >> m; 
    for (int y = 0; y < n; y += 1) {
        string input;
        cin >> input;
        for (int x = 0; x < m; x += 1) {
            int token = input[x] - '0';
            board[y][x] = token;
        }
    }

    bfs(0, 0);
    return 0;
}