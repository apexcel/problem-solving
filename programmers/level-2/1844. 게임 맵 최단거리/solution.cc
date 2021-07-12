#include <vector>
#include <queue>
#include <iostream>

using namespace std;

int solution(vector<vector<int>> maps) {
    int height = maps.size(), width = maps[0].size();
    int dir[4][2] = {
        {0, 1},
        {1, 0},
        {0, -1},
        {-1, 0},
    };
    
    queue<pair<pair<int, int>, int>> q;
    q.push(make_pair(make_pair(0, 0), 1));

    while (q.size() > 0) {
        int x = q.front().first.first;
        int y = q.front().first.second;
        int depth = q.front().second;

        q.pop();
        if (y == height - 1 && x == width - 1) return depth;

        for (int i = 0; i < 4; i++) {
            int dx = dir[i][0];
            int dy = dir[i][1];

            if (y + dy >= 0 && x + dx >= 0 && y + dy < height && x + dx < width && maps[y + dy][x + dx] > 0) {
                q.push(make_pair(make_pair(x + dx, y + dy), depth + 1));
                maps[y + dy][x + dx] = 0;
            }
        }
    }
    return -1;
}

int main() {
    vector<vector<int>> vec = {
        {1, 0, 1, 1, 1}, {1, 0, 1, 0, 1}, {1, 0, 1, 1, 1}, {1, 1, 1, 0, 1}, {0, 0, 0, 0, 1}
    };
    cout << solution(vec);
}