#include <iostream>
#define LIMIT 100000

using namespace std;

int main() {
    ios::sync_with_stdio(false);
	cin.tie(NULL);

    int n, m;
    cin >> n >> m;

    int sum[LIMIT + 1]{0, };
    for (int i = 1; i <= n; i += 1) {
        cin >> sum[i];
        sum[i] += sum[i - 1];
    }

    while (m--) {
        int b, e;
        cin >> b >> e;
        cout << sum[e] - sum[b - 1] << "\n";
    }
}