#include <iostream>
#include <string>
#include <vector>
using namespace std;

vector<string> v;

const int shape[4][3][2] = { // 상대 좌표 x, y
    {{0, 0}, {0, 1}, {1, 1}}, // ▙
    {{0, 0}, {1, 0}, {0, 1}}, // ▛
    {{0, 0}, {1, 0}, {1, 1}}, // ▜
    {{0, 0}, {0, 1}, {-1, 1}} // ▟
};

vector<vector<int>> gen_map(const vector<string> &puzzle, int h, int w) {
    vector<vector<int>> map;
    int cnt = 0;
    fill(map[0], map[h], 0);

    for (int a = 0; a < h; ++a) {
        for (int b = 0; b < w; ++b) {
            if (v[a][b] == '#') map[a][b] = 1;
            else {
                cnt++;
                map[a][b] = 0;
            }
        }
    }

    if (cnt < 3 || cnt % 3 != 0) return vector<vector<int>>();
    else return map;
}

bool solution(const vector<vector<int>> v) {
    int size = v.size(), len = v.at(0).size();
    for (int q = 0; q < size; ++q) {
        for (int w = 0; w < len; ++w) {
            if (v[q][w] != 1) {
            }
        }
    }

    for (int k = 0; k < 4; ++k) {
        shape[k]
    }

    return true;
}

int main() {
    int tc, h, w;
    cin >> tc;
    for (int i = 0; i < tc; i += 1) {
        cin >> h >> w;
        for (int j = 0; j < h; ++j) {
            string line;
            cin >> line;
            v.emplace_back(line);
            if (line.length() > w) {
                v.pop_back();
                j--;
            }
        }
        vector<vector<int>> map = gen_map(v, h, w);
        if (map.size() < 0) break;
        else solution(map);
    }

    // for (vector<string>::iterator it = v.begin(); it != v.end(); ++it) {
    //     cout << *it << endl;
    // }
    
    
    return 0;
}