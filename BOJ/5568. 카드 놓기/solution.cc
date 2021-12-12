#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

int n, k, nums[11], visited[11];
unordered_set<string> s;
vector<int> temp;

void dfs(int depth) {
    if (depth == k) {
        string t;
        for (int x: temp) t += to_string(x);
        s.insert(t);
        return;
    }

    for (int i = 0; i < n; i += 1) {
        if (!visited[i]) {
            visited[i] = 1;
            temp.push_back(nums[i]);
            dfs(depth + 1);
            temp.pop_back();
            visited[i] = 0;
        }
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(0);

    cin >> n >> k;

    for (int i = 0; i < n; i += 1) {
        cin >> nums[i];
    }
    dfs(0);
    cout << s.size();
    return 0;
}