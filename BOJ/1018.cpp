#include <iostream>
#include <algorithm>

char chess[8][8];
char board[100][100];

int checker() {
    int bw_cnt = 0, wb_cnt = 0;
    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 8; j++) {
                if ((i + j) % 2 == 0 && chess[i][j] == 'W') {
                    bw_cnt++;
                }
                if ((i + j) % 2 != 0 && chess[i][j] == 'B') {
                    bw_cnt++;
                }
                if ((i + j) % 2 == 0 && chess[i][j] == 'B') {
                    wb_cnt++;
                }
                if ((i + j) % 2 != 0 && chess[i][j] == 'W') {
                    wb_cnt++;
                }
        }
    }
    return std::min(bw_cnt, wb_cnt);
}

void input_chess(int x, int y) {
    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 8; j++) {
            chess[i][j] = board[x+i][y+j];
        }
    }
}

int main() {
    int n, m, val = 987654321;
    scanf("%d %d", &n, &m);
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            std::cin >> board[i][j];
        }
    }

    for (int i = 0; i <= n - 8; i++) {
        for (int j = 0; j <= m - 8; j++) {
            input_chess(i, j);
            val = std::min(val, checker());
        }
    }
    printf("%d", val);
    return 0;
}