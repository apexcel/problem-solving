#include <iostream>
#include <vector>
#include <stack>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;

    stack<int> s;
    vector<int> vec(n), res(n);

    for (int i = 0; i < n; i += 1) {
        cin >> vec[i];
    }

    for (int i = n - 1; i >= 0; i -= 1) {
        while (!s.empty() && s.top() <= vec[i]) s.pop();

        s.empty() ? res[i] = -1 : res[i] = s.top();
        s.push(vec[i]);
    }

    for (int k: res) cout << k << " ";

    return 0;
}