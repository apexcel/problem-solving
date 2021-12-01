#include <iostream>

using namespace std;

int w[50], h[50];

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    int t;
    cin >> t;
    for (int i = 0; i < t; i += 1) cin >> w[i] >> h[i];

    for (int i = 0; i < t; i += 1) {
        int rank = 1;
        for (int j = 0; j < t; j += 1) {
            if (w[j] > w[i] && h[j] > h[i]) rank += 1;
        }
        cout << rank << ' ';
    }
}