#include <iostream>
#include <cstring>
#include <vector>

using namespace std;

int dx[8] = {0, 1, 1, 1, 0, -1, -1, -1};
int dy[8] = {-1, -1, 0, 1, 1, 1, 0, -1};
int dp[5][5][11];
vector<string> board(5);
string word;

int check(int x, int y, int index) {
    int& dpp = dp[y][x][index];
    if (y < 0 || x < 0 || y >= 5 || x >= 5) return 0;
    if (dpp != -1) return dpp;
    if (board[y][x] != word[index]) return dpp = 0;
    dpp = 1;
    if (index == word.size() - 1) return 1;

    for (int i = 0; i < 8; i += 1) {
        int nx = x + dx[i], ny = y + dy[i];
        if (check(nx, ny, index + 1)) return 1;
    }

    return dpp = 0;
}

bool solution(vector<string> board) {
    for (int y = 0; y < 5; y += 1) {
        for (int x = 0; x < 5; x += 1) {
            if (check(x, y, 0)) return true;
        }
    }
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        
        for (int i = 0; i < 5; i += 1) {
            cin >> board[i];
        }

        int cnt;
        cin >> cnt;
        for (int i = 0; i < cnt; i += 1) {
            cin >> word;
            memset(dp, -1, sizeof(dp));
            if (solution(board)) {
                cout << word << " YES\n";
            }
            else {
                cout << word << " NO\n";
            }
        }
    }

    return 0;
}