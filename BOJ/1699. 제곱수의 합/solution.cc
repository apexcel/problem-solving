#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;
    vector<int> vec(n + 1, 0);

    for (int i = 1; i <= n; i += 1) {
        vec[i] = i;
        for (int j = 1; j * j <= i; j += 1) {
            vec[i] = min(vec[i], vec[i - (j * j)] + 1);
        }
    }

    cout << vec[n];
    return 0;
}