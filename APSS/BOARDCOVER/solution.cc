#include <iostream>
#include <vector>
#include <string>

using namespace std;

int shapes[4][3][2] = {
    {{0, 0}, {1, 0}, {1, 1}},
    {{0, 0}, {0, 1}, {-1, 1}},
    {{0, 0}, {0, 1}, {1, 1}},
    {{0, 0}, {1, 0}, {0, 1}},
};
int h, w;
vector<vector<int>> matrix;

vector<vector<int>> gen_matrix() {
    vector<vector<int>> vec(h, vector<int>(w));
    for (int y = 0; y < h; y += 1) {
        string str;
        cin >> str;
        for (int x = 0; x < w; x += 1) {
            vec[y][x] = str[x] == '#' ? 0 : 1;
        }
    }
    return vec;
}

bool is_possible(int x, int y, int idx) {
    for (int i = 0; i < 3; i += 1) {
        int nx = x + shapes[idx][i][0], ny = y + shapes[idx][i][1];
        if (nx < 0 || ny < 0 || nx >= w || ny >= h || matrix[ny][nx] != 1) return false;
    }
    return true;
}

void cover_matrix(int x, int y, int idx, int val) {
    for (int i = 0; i < 3; i += 1) {
        matrix[y + shapes[idx][i][1]][x + shapes[idx][i][0]] = val;
    }
}

int cover() {
    int x = -1, y = -1;
    for (int i = 0; i < h; i += 1) {
        for (int j = 0; j < w; j += 1) {
            if (matrix[i][j] == 1) {
                y = i;
                x = j;
                break;
            }
        }
        if (y != -1) break;
    }
    if (y == -1) return 1;

    int cnt = 0;
    for (int i = 0; i < 4; i += 1) {
        if (is_possible(x, y, i)) {
            cover_matrix(x, y, i, 2);
            cnt += cover();
            cover_matrix(x, y, i, 1);
        }
    }
    return cnt;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        cin >> h >> w;
        matrix = gen_matrix();
        cout << cover() << '\n';
    }
}