#include <iostream>

#define MAX 10001

using namespace std;

int p[MAX];

void sieve() {
    for (int i = 2; i < MAX; i += 1) p[i] = 1;
    for (int i = 2; i * i < MAX; i += 1) {
        for (int j = i + i; j < MAX; j += i) p[j] = 0;
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    sieve();

    int tc;
    cin >> tc;

    while (tc--) {
        int n;
        cin >> n;
        int i = n / 2, j = n / 2;

        while (1) {
            if (p[i] && p[j]) {
                cout << i << ' ' << j << '\n';
                break;
            }
            i -= 1;
            j += 1;
        }
    }

    return 0;
}