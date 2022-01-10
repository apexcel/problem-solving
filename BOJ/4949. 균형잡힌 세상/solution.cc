#include <iostream>
#include <string>
#include <stack>
#include <unordered_map>

using namespace std;

unordered_map<char, int> umap;

bool check(string& str) {
    stack<int> s;
    for (string::iterator it = str.begin(); it != str.end(); it += 1) {
        int v = umap[*it];
        if (v) {
            if (v > 0) s.push(v);
            else if (s.empty() || s.top() + v != 0) return false;
            else s.pop();
        }
    }
    return s.empty();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    umap['('] = 1;
    umap['['] = 2;
    umap[')'] = -1;
    umap[']'] = -2;

    string str;
    while (1) {
        getline(cin, str);
        if (str[0] == '.') break;
        cout << (check(str) ? "yes" : "no") << '\n';
    }

    return 0;
}