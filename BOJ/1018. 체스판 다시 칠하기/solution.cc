#include <iostream>

using namespace std;

char board[50][50];
char gameBoard[8][8];
int res = 999;

int solution(int y, int x) {
    int bw = 0, wb = 0;

    for (int i = 0; i < 8; i += 1) {
        for (int j = 0; j < 8; j += 1) {
            gameBoard[i][j] = board[y + i][x + j];
        }
    }

    for (int i = 0; i < 8; i += 1) {
        for (int j = 0; j < 8; j += 1) {
            bool cur = gameBoard[i][j] == 'W';
            if ((i + j) % 2) {
                cur ? bw += 1 : wb += 1;
            }
            else {
                cur ? wb += 1 : bw += 1;
            }
        }
    }

    return min(wb, bw);
}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n, m;
    cin >> n >> m;

    for (int i = 0; i < n; i += 1) {
        for (int j = 0; j < m; j += 1) {
            cin >> board[i][j];
        }
    }

    for (int y = 0; y <= n - 8; y += 1) {
        for (int x = 0; x <= m - 8; x += 1) {
            res = min(res, solution(y, x));
        }
    }
    
    cout << res;
    return 0;
}