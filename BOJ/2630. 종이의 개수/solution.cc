#include <iostream>

using namespace std;

int n, w = 0, b = 0;
int board[128][128];

bool check(int size, int x, int y) {
    int& begin = board[y][x];
    for (int i = y; i < y + size; i += 1) {
        for (int j = x; j < x + size; j += 1) {
            if (board[i][j] != begin) {
                return false;
            }
        }
    }
    return true;
}

void solution(int size, int x, int y) {
    if (check(size, x, y)) {
        board[y][x] ? b += 1 : w += 1;
        return;
    }

    int half = size >> 1;
    solution(half, x, y);
    solution(half, x + half, y);
    solution(half, x, y + half);
    solution(half, x + half, y + half);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> n;
    for (int y = 0; y < n; y += 1) {
        for (int x = 0; x < n; x += 1) {
            cin >> board[y][x];
        }
    }

    solution(n, 0, 0);

    cout << w << '\n' << b;
    return 0;
}