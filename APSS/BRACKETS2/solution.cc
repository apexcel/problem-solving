#include <iostream>
#include <unordered_map>
#include <stack>
#include <string>

using namespace std;

bool solution(string& str) {
    stack<int> s;
    unordered_map<char, int> umap;
    umap['('] = 1;
    umap['{'] = 2;
    umap['['] = 3;
    umap[')'] = -1;
    umap['}'] = -2;
    umap[']'] = -3;

    for (int i = 0; i < str.size(); i += 1) {
        char c = str[i];
        if (c == '(' || c == '{' || c == '[') s.push(umap[c]);
        else {
            if (!s.size()) return false;
            if (s.top() + umap[c] != 0) return false;
            s.pop();
        }
    }
    return s.empty();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        string str;
        cin >> str;
        cout << (solution(str) ? "YES" : "NO") << '\n';
    }

    return 0;
}