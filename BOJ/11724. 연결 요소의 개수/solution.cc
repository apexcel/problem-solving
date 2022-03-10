#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int visited[1001];

void dfs(vector<vector<int>>& list, int x) {
    visited[x] = 1;
    for (int i = 0; i < list[x].size(); i += 1) {
        if (visited[list[x][i]]) continue;
        dfs(list, list[x][i]);
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int v, e, from, to, cnt = 0;;
    cin >> v >> e;

    vector<vector<int>> list(v + 1, vector<int>());

    while (e--) {
        cin >> from >> to;
        list[from].push_back(to);
        list[to].push_back(from);
    }

    for (int i = 1; i <= v; i += 1) {
        if (visited[i]) continue;
        dfs(list, i);
        cnt += 1;
    }

    cout << cnt;

    return 0;
}