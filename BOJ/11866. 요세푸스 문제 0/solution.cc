#include <iostream>
#include <queue>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    queue<int> q;
    int n, k;
    cin >> n >> k;

    for (int i = 1; i <= n; i += 1) {
        q.push(i);
    }

    cout << "<";

    while (!q.empty()) {
        for (int i = 0; i < k - 1; i += 1) {
            q.push(q.front());
            q.pop();
        }

        cout << q.front();
        q.pop();

        if (!q.empty()) {
            cout << ", ";
        }
    }
    cout << ">";

    return 0;
}